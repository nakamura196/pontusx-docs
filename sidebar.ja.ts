import type { Sidebar } from 'vocs'

/**
 * Japanese sidebar for the unofficial translation under `/ja/docs/`.
 * Mirrors the structure of `sidebar.ts` (English) one-to-one.
 */
export const sidebarJa = {
  '/ja/docs/': [
    {
      text: 'はじめに・概要',
      collapsed: false,
      items: [
        { text: '概要', link: '/ja/docs/introduction/overview' },
        {
          text: 'ビジョン・ミッション・価値観',
          link: '/ja/docs/introduction/vision-mission-values'
        },
        {
          text: '中核となる価値提案',
          link: '/ja/docs/introduction/core-value-proposition'
        },
        {
          text: '基本概念',
          link: '/ja/docs/getting-started/core-concepts'
        },
        {
          text: 'Gaia-X へのコミットメント',
          link: '/ja/docs/introduction/gaia-x-commitment'
        }
      ]
    },
    {
      text: 'はじめかた',
      collapsed: false,
      items: [
        { text: 'オンボーディングガイド', link: '/ja/docs/getting-started/onboarding-guide' },
        { text: 'ウォレットの設定', link: '/ja/docs/getting-started/wallet-setup' },
        { text: 'クイックリンク', link: '/ja/docs/quick_links' },
        {
          text: 'Pontus-X エコシステム',
          link: '/ja/docs/getting-started/pontus-x-ecosystem'
        },
        {
          text: '公開（パブリッシュ）ガイド',
          link: '/ja/docs/getting-started/Publication-guide'
        },
        {
          text: 'データサービスの提供',
          link: '/ja/docs/getting-started/data-service-offerings'
        },
        {
          text: '標準的なユースケース',
          collapsed: true,
          items: [
            { text: 'はじめに', link: '/ja/docs/use-cases/introduction' },
            { text: 'アセットのダウンロード', link: '/ja/docs/use-cases/download' },
            { text: 'アセットの計算処理（Compute）', link: '/ja/docs/use-cases/compute' },
            { text: 'アセットの公開', link: '/ja/docs/use-cases/publish' }
          ]
        },
        {
          text: '移行（マイグレーション）',
          collapsed: true,
          items: [
            { text: '概要', link: '/ja/docs/migrations/overview' },
            {
              text: 'メインネットへの移行',
              link: '/ja/docs/migrations/oasis-mainnet-migration'
            },
            { text: 'サクセスプログラム', link: '/ja/docs/migrations/success' },
            { text: 'よくある質問', link: '/ja/docs/migrations/faq' }
          ]
        }
      ]
    },
    {
      text: 'コミュニティとガバナンス',
      collapsed: true,
      items: [
        {
          text: '参加者レジストリ',
          link: '/ja/docs/participants-and-federators/ecosystem-participants'
        },
        {
          text: 'オーケストレーター',
          link: '/ja/docs/participants-and-federators/federators'
        },
        { text: 'コントリビュートの方法', link: '/ja/docs/contribute/overview' },
        { text: 'リポジトリ一覧', link: '/ja/docs/contribute/repositories' }
      ]
    },
    {
      text: 'EU データ法（Data Act）',
      collapsed: true,
      items: [
        {
          text: 'はじめに',
          link: '/ja/docs/data-act/data-act-1-intro'
        },
        {
          text: '詳細な分析',
          link: '/ja/docs/data-act/data-act-2-detailed'
        },
        {
          text: 'データ主権',
          link: '/ja/docs/data-act/data-act-3-sovereignty'
        },
        {
          text: '戦略的な機会',
          link: '/ja/docs/data-act/data-act-4-opportunities'
        },
        {
          text: '実装ガイド',
          link: '/ja/docs/data-act/data-act-5-nextsteps'
        }
      ]
    },
    {
      text: '開発者向けリソース',
      collapsed: true,
      items: [
        {
          text: 'Compute-to-Data 向けアルゴリズムの開発',
          link: '/ja/docs/getting-started/buildCustomAlgorithmsForPontusX'
        },
        {
          text: 'Pontus-X ライブラリを使う',
          collapsed: true,
          items: [{ text: 'Nautilus', link: 'https://nautilus.delta-dao.com/' }]
        },
        {
          text: 'Ocean Enterprise の自動化 (v2)',
          collapsed: true,
          items: [
            {
              text: 'データセットを利用する',
              collapsed: true,
              items: [
                {
                  text: '概要',
                  link: '/ja/docs/oe-automation/consume/overview'
                },
                {
                  text: 'ocean.js を使う',
                  link: '/ja/docs/oe-automation/consume/ocean-js'
                },
                {
                  text: 'Ocean CLI を使う',
                  link: '/ja/docs/oe-automation/consume/ocean-cli'
                }
              ]
            }
          ]
        },
        {
          text: 'Pontus-X ネットワーク',
          collapsed: true,
          items: [
            {
              text: 'クイックスタート',
              link: '/ja/docs/pontus-x-networks/quick-start'
            },
            {
              text: 'バリデータノードの構築',
              link: '/ja/docs/pontus-x-networks/node-setup'
            },
            { text: 'テストネットワーク', link: '/ja/docs/pontus-x-networks/testnet' },
            { text: '開発ネットワーク', link: '/ja/docs/pontus-x-networks/devnet' }
          ]
        }
      ]
    },
    {
      text: '技術リファレンス',
      collapsed: true,
      items: [
        {
          text: '技術概要',
          link: '/ja/docs/technical-architecture/architecture-overview'
        },
        {
          text: '中核コンポーネント',
          items: [
            {
              text: 'マーケットとポータル',
              link: '/ja/docs/technical-architecture/portals'
            },
            {
              text: 'アクセスコントローラー',
              link: '/ja/docs/technical-architecture/access-controller'
            },
            {
              text: 'サービスカタログ — メタデータキャッシュ (Aquarius)',
              link: '/ja/docs/technical-architecture/aquarius'
            },
            {
              text: 'サブグラフ — トランザクションキャッシュ',
              link: '/ja/docs/technical-architecture/subgraph'
            }
          ]
        },
        {
          text: 'アセットメタデータ標準 (DDO)',
          collapsed: true,
          items: [
            {
              text: 'はじめに',
              link: '/ja/docs/ddo_credential/ddo_intro',
              items: [
                {
                  text: 'W3C VC と VP',
                  link: '/ja/docs/ddo_credential/w3c_credentials'
                },
                {
                  text: 'オンチェーンメタデータ',
                  link: '/ja/docs/ddo_credential/on_chain'
                }
              ]
            },
            {
              text: 'Verifiable Presentation（DDO スキーマ）',
              link: '/ja/docs/ddo_credential/ddo_schema',
              items: [
                {
                  text: 'メタデータ',
                  link: '/ja/docs/ddo_credential/metadata',
                  items: [
                    {
                      text: 'アルゴリズムのメタデータ',
                      link: '/ja/docs/ddo_credential/algorithm_metadata',
                      items: [
                        {
                          text: 'コンテナ',
                          link: '/ja/docs/ddo_credential/container'
                        },
                        {
                          text: 'アルゴリズムの Consumer Parameters',
                          link: '/ja/docs/ddo_credential/algorithm_consumer_parameters'
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'サービス',
                  link: '/ja/docs/ddo_credential/service',
                  items: [
                    {
                      text: 'Files オブジェクト',
                      link: '/ja/docs/ddo_credential/files_object'
                    },
                    {
                      text: 'Compute オブジェクト',
                      link: '/ja/docs/ddo_credential/compute_object'
                    },
                    {
                      text: 'サービスの Consumer Parameters',
                      link: '/ja/docs/ddo_credential/service_consumer_parameters'
                    }
                  ]
                },
                {
                  text: 'クレデンシャル（アクセス制御）',
                  link: '/ja/docs/ddo_credential/credentials'
                },
                {
                  text: 'License オブジェクト',
                  link: '/ja/docs/ddo_credential/license_object',
                  items: [
                    { text: 'ODRL オブジェクト', link: '/ja/docs/ddo_credential/odrl_object' }
                  ]
                },
                {
                  text: 'Consumer Parameters',
                  link: '/ja/docs/ddo_credential/consumer_parameters'
                },
                {
                  text: '言語と基底方向 (i18n)',
                  link: '/ja/docs/ddo_credential/language_i18n'
                },
                {
                  text: 'ライフサイクル状態',
                  link: '/ja/docs/ddo_credential/lifecycle_states'
                },
                {
                  text: 'Remote オブジェクト',
                  link: '/ja/docs/ddo_credential/remote_object'
                },
                {
                  text: 'スキーマ全体像',
                  link: '/ja/docs/ddo_credential/complete_overview'
                },
                { text: '変更履歴', link: '/ja/docs/ddo_credential/changelog' }
              ]
            }
          ]
        },
        { text: 'ネットワーク詳細', link: '/ja/docs/technical-architecture/network-details' }
      ]
    },
    {
      text: 'この日本語版について',
      items: [
        { text: '翻訳について', link: '/ja/docs/about-translation' },
        { text: '英語版（原典）', link: '/docs/introduction/overview' }
      ]
    },
    {
      text: '法務',
      items: [
        { text: 'プライバシーポリシー（英語）', link: '/privacy' },
        { text: '運営者情報（Imprint）', link: 'https://delta-dao.com/imprint' }
      ]
    }
  ]
} as const satisfies Sidebar
