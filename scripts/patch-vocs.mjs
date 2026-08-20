// Workarounds for Vocs bugs that only surface when `basePath` is set, i.e. on a
// sub-path deployment such as a GitHub Pages project site. All of them are
// no-ops for a root deployment like docs.pontus-x.eu.
//
// Safe to run repeatedly; each patch is a no-op once applied. If a patch's
// target code is gone (Vocs upgraded) the script FAILS when BASE_PATH is set,
// rather than silently publishing a broken site.
import { readFileSync, writeFileSync } from 'node:fs'

const patches = [
  {
    // Prerendering produces empty pages under a basePath.
    //
    // `_lib/vite/prerender.js` calls `prerender(route)` with a route that does
    // NOT include `basePath` (e.g. "/docs/introduction/overview"), while
    // `index.server.js` hands that value to a <StaticRouter> configured with
    // `basename: basePath`. React Router refuses to match a location that does
    // not start with its basename, so every page prerenders to an empty shell:
    // the site still boots client-side, but ships no HTML content, no <title>
    // and no OG tags. Prefixing the router location with `basePath` restores
    // SSR while leaving route matching (which uses the unprefixed location)
    // untouched.
    name: 'prerender under basePath',
    file: 'node_modules/vocs/_lib/app/index.server.js',
    find: '_jsx(StaticRouter, { location: location, basename: basePath,',
    replace: "_jsx(StaticRouter, { location: `${basePath ?? ''}${location}`, basename: basePath,",
  },
  {
    // Same-page anchor links ignore the basePath.
    //
    // For a markdown link like `[x](#section)`, `Anchor` renders a plain <a>
    // with `href={`${pathname}${href}`}`. `useLocation().pathname` has the
    // basename stripped, so the anchor points outside the deployment and 404s.
    // `useHref` re-applies the basename. Called unconditionally to keep hook
    // order stable, and only fed a hash href so it never sees an external URL.
    name: 'Anchor same-page links',
    file: 'node_modules/vocs/_lib/app/components/mdx/Anchor.js',
    find: `import { useLocation } from 'react-router';`,
    replace: `import { useHref, useLocation } from 'react-router';`,
    then: {
      find: `    const { pathname } = useLocation();
    // Heading slug links`,
      replace: `    const { pathname } = useLocation();
    const idHref = useHref(href?.match(/^#/) ? \`\${pathname}\${href}\` : pathname);
    // Heading slug links`,
    },
    andThen: {
      find: 'href: `${pathname}${href}` }));',
      replace: 'href: idHref }));',
    },
  },
  {
    // "Skip to content" has the same defect as Anchor, from the same cause.
    name: 'SkipLink',
    file: 'node_modules/vocs/_lib/app/components/SkipLink.js',
    find: `import { useLocation } from 'react-router';`,
    replace: `import { useHref, useLocation } from 'react-router';`,
    then: {
      find: `    const { pathname } = useLocation();
    return (_jsx("a", { className: clsx(styles.root, visuallyHidden), href: \`\${pathname}#\${skipLinkId}\`,`,
      replace: `    const { pathname } = useLocation();
    const skipHref = useHref(\`\${pathname}#\${skipLinkId}\`);
    return (_jsx("a", { className: clsx(styles.root, visuallyHidden), href: skipHref,`,
    },
  },
]

let applied = 0
let alreadyApplied = 0
const failures = []

for (const patch of patches) {
  const edits = [patch, patch.then, patch.andThen].filter(Boolean)
  let source = readFileSync(patch.file, 'utf-8')
  let changed = false
  let missing = false

  for (const { find, replace } of edits) {
    if (source.includes(replace)) continue // already applied
    if (!source.includes(find)) {
      missing = true
      break
    }
    source = source.replace(find, replace)
    changed = true
  }

  if (missing) failures.push(patch.name)
  else if (changed) {
    writeFileSync(patch.file, source)
    applied++
  } else alreadyApplied++
}

if (failures.length && process.env.BASE_PATH) {
  // Fail loudly rather than silently publishing a site with broken links.
  console.error(
    `patch-vocs: expected code not found for: ${failures.join(', ')}.\n` +
      'Vocs likely changed; re-check whether these basePath bugs still exist.'
  )
  process.exit(1)
}

console.log(
  `patch-vocs: ${applied} applied, ${alreadyApplied} already applied` +
    (failures.length ? `, ${failures.length} not found (BASE_PATH unset, ignoring)` : '')
)
