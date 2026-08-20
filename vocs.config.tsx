import { defineConfig } from 'vocs'
import { sidebar } from './sidebar'
import { sidebarJa } from './sidebar.ja'
import remarkGemoji from 'remark-gemoji'
import { basePathAssets } from './scripts/basePathAssets'

// Set BASE_PATH when deploying to a sub-path (e.g. GitHub Pages project site:
// https://<user>.github.io/pontusx-docs -> BASE_PATH=/pontusx-docs).
// Left undefined for root deployments such as https://docs.pontus-x.eu.
const basePath = process.env.BASE_PATH || undefined

export default defineConfig({
  basePath,
  title: 'Pontus-X Docs',
  titleTemplate: '%s · Pontus-X Docs',
  description:
    'The official documentation for Pontus-X, a decentralized data and AI ecosystem.',
  head() {
    // The upstream Plausible tracker is bound to docs.pontus-x.eu. A fork
    // deployed under a BASE_PATH must not pollute that site's statistics.
    if (basePath) return <></>
    return (
      <>
        <script
          defer
          data-domain='docs.pontus-x.eu'
          src='https://plausible.io/js/script.js'
        ></script>
      </>
    )
  },
  ogImageUrl: '/og-image.png',
  iconUrl: { light: '/favicons/icon.png', dark: '/favicons/icon.png' },
  logoUrl: { light: '/icon-light.png', dark: '/icon-dark.png' },
  rootDir: '.',
  sidebar: { ...sidebar, ...sidebarJa },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/deltaDAO/pontusx-docs',
    },
  ],
  theme: {
    colorScheme: 'system',
    accentColor: {
      light: '#004967',
      dark: '#00a19e',
    },
  },
  topNav: [
    {
      text: 'Language / 言語',
      items: [
        { text: 'English', link: '/docs/introduction/overview' },
        { text: '日本語 (Japanese)', link: '/ja/docs/introduction/overview' }
      ]
    },
    {
      text: 'Portals',
      items: [
        {
          text: 'Pontus-X Portal',
          link: 'https://www.pontus-x.eu/',
        },
        {
          text: 'EuProGigant Portal',
          link: 'https://portal.euprogigant.io/',
        },
        {
          text: 'moveID Portal',
          link: 'https://portal.moveid.eu/',
        },
        {
          text: 'Cooperants Portal',
          link: 'https://federator.cooperants.info/marketplace',
        },
        {
          text: 'Airbus Portal',
          link: 'https://airbus.pontus-x.eu/',
        },
        {
          text: 'Service-Meister Portal',
          link: 'https://servicemeister.pontus-x.eu/',
        },
        {
          text: 'Berlin State Portal',
          link: 'https://sbb.pontus-x.eu/',
        },
        {
          text: 'Flex4Res Portal',
          link: 'https://flex4res.pontus-x.eu/',
        },
        {
          text: 'Future Mobility Portal',
          link: 'https://marketplace.future-mobility-alliance.org/',
        },
        {
          text: 'EnergySHR Portal',
          link: 'https://www.energyshr.nl/',
        },
        {
          text: 'AgrospAI Portal',
          link: 'https://agrospai.udl.cat/',
        },
      ],
    },
  ],
  markdown: {
    remarkPlugins: [remarkGemoji],
  },
  vite: {
    plugins: [basePathAssets(basePath)],
  },
})
