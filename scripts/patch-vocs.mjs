// Workaround for a Vocs bug that breaks prerendering when `basePath` is set.
//
// `_lib/vite/prerender.js` calls `prerender(route)` with a route that does NOT
// include `basePath` (e.g. "/docs/introduction/overview"), while
// `_lib/app/index.server.js` hands that value to a <StaticRouter> configured
// with `basename: basePath`. React Router refuses to match a location that does
// not start with its basename, so every page prerenders to an empty shell:
// the site still boots client-side, but ships no HTML content, no <title> and
// no OG tags. Prefixing the router location with `basePath` restores SSR while
// leaving route matching (which uses the unprefixed location) untouched.
//
// Only relevant for sub-path deployments such as GitHub Pages project sites.
// Safe to run repeatedly; a no-op once applied.
import { readFileSync, writeFileSync } from 'node:fs'

const file = 'node_modules/vocs/_lib/app/index.server.js'
const target = '_jsx(StaticRouter, { location: location, basename: basePath,'
const patched = '_jsx(StaticRouter, { location: `${basePath ?? \'\'}${location}`, basename: basePath,'

const source = readFileSync(file, 'utf-8')

if (source.includes(patched)) {
  console.log('patch-vocs: already applied')
} else if (source.includes(target)) {
  writeFileSync(file, source.replace(target, patched))
  console.log('patch-vocs: applied prerender basePath fix')
} else if (process.env.BASE_PATH) {
  // Fail loudly rather than silently publishing a site with empty HTML.
  console.error(
    `patch-vocs: expected code not found in ${file}.\n` +
      'Vocs likely changed; re-check whether the basePath prerender bug still exists.'
  )
  process.exit(1)
} else {
  console.log('patch-vocs: nothing to patch (BASE_PATH unset)')
}
