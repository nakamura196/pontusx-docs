import type { Plugin } from 'vite'

/**
 * Prefixes root-relative asset and raw-anchor references inside MDX pages with
 * `basePath`.
 *
 * Vocs rewrites its own assets and the links it renders through its `Link`
 * component (markdown `[text](/docs/...)`, `<HomePage.Button href="...">`), but
 * it leaves the page source untouched for:
 *
 *   - markdown images     `![alt](/images/x.png)`
 *   - JSX attributes      `src="/images/x.png"`, `src="/logo-light.svg"`
 *   - raw anchors         `<a href="/docs/...">`
 *   - Tailwind arbitrary  `bg-[url('/colosseum.svg')]`
 *
 * On a root deployment (docs.pontus-x.eu) those resolve fine. On a sub-path
 * deployment such as a GitHub Pages project site they all 404, so they are
 * rewritten here at build time — before the MDX plugin compiles the file, so
 * the prefix lands in both the prerendered HTML and the client bundle.
 *
 * Deliberately narrow: markdown *links* and Vocs component props are left alone
 * because Vocs already prefixes them, and rewriting them would double up.
 */
export function basePathAssets(basePath: string | undefined): Plugin {
  const isRewritable = (path: string) =>
    path.startsWith('/') && !path.startsWith('//') && !path.startsWith(`${basePath}/`)

  return {
    name: 'pontusx-base-path-assets',
    enforce: 'pre',
    apply: 'build',
    transform(code, id) {
      if (!basePath) return null
      if (!id.split('?')[0].endsWith('.mdx')) return null

      const rewritten = code
        // ![alt](/images/x.png) — markdown images only; the `!` keeps plain
        // markdown links (which Vocs prefixes itself) out of scope.
        .replace(
          /(!\[[^\]]*\]\()(\/[^)\s]*)/g,
          (match, prefix, path) => (isRewritable(path) ? `${prefix}${basePath}${path}` : match)
        )
        // src="/..." and src='/...' on JSX elements.
        .replace(
          /(\bsrc=)(["'])(\/[^"']*)\2/g,
          (match, attr, quote, path) =>
            isRewritable(path) ? `${attr}${quote}${basePath}${path}${quote}` : match
        )
        // <a href="/..."> — literal anchors only, so Vocs components keep theirs.
        .replace(
          /(<a\s+[^>]*?\bhref=)(["'])(\/[^"']*)\2/g,
          (match, attr, quote, path) =>
            isRewritable(path) ? `${attr}${quote}${basePath}${path}${quote}` : match
        )
        // url('/...') inside Tailwind arbitrary values.
        .replace(
          /(url\()(["']?)(\/[^"')]*)\2(\))/g,
          (match, open, quote, path, close) =>
            isRewritable(path) ? `${open}${quote}${basePath}${path}${quote}${close}` : match
        )

      return rewritten === code ? null : { code: rewritten, map: null }
    },
  }
}
