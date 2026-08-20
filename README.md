> **This is a fork of [deltaDAO/pontusx-docs](https://github.com/deltaDAO/pontusx-docs) that adds an unofficial Japanese translation.**
>
> 本リポジトリは [Pontus-X 公式ドキュメント](https://docs.pontus-x.eu/) の**非公式な日本語訳**を追加したフォークです。
>
> - 日本語版: https://nakamura196.github.io/pontusx-docs/ja/docs/introduction/overview
> - 翻訳について: [`pages/ja/docs/about-translation.mdx`](pages/ja/docs/about-translation.mdx)
> - 原典の `pages/` 配下は CC BY-SA 4.0。本翻訳も同ライセンスで提供します。
> - 英語版のページは原文のまま保持しており、翻訳は `pages/ja/` 以下にのみ存在します。
>
> ### このフォークでの変更点
>
> | ファイル | 変更 |
> | --- | --- |
> | `pages/ja/**` | 日本語訳（新規） |
> | `sidebar.ja.ts` | 日本語サイドバー（新規） |
> | `vocs.config.tsx` | `BASE_PATH` 対応、言語切替、フォーク時の解析タグ無効化 |
> | `scripts/patch-vocs.mjs` | `basePath` 指定時に Vocs のプリレンダが空になる不具合の回避（新規） |
> | `.github/workflows/deploy-pages.yml` | GitHub Pages への公開（新規） |
> | `.nvmrc` | Node 22 固定（Node 25 では `@typescript/vfs` がビルド時に落ちるため） |

# Vision, Mission and Values

[Pontus-X](https://www.pontus-x.eu/) is a decentralized digital ecosystem that aims to enable secure, compliant, and innovative data sharing, AI services and monetization across Europe, based on [Ocean Enterprise](https://www.oceanenterprise.io/), and within the [Gaia-X Framework](https://docs.gaia-x.eu/).

## Vision

Our vision is to be Europe's premier decentralized data space ecosystem, facilitating seamless collaboration and innovation across diverse industries. We envision a future where organizations can securely exchange and monetize their data, driving economic growth and digital transformation while maintaining control over their data.

## Mission

Enable secure, decentralized, and compliant data sharing and digital service monetization across Europe. We aim to empower organizations with cutting-edge infrastructure that enables data sovereignty and privacy through innovative paradigms like Compute-to-Data (CtD). [Pontus-X](https://www.pontus-x.eu/) is committed to fostering a sustainable and competitive ecosystem for digital services within the [Gaia-X Framework](https://docs.gaia-x.eu/), promoting trust and transparency in the digital economy.

## Core Values

-	**Data Sovereignty**: Upholding the highest data protection and privacy standards ensures organizations maintain complete control over their data.
-	**Transparency**: Promoting openness and accountability in all ecosystem digital transactions and governance processes.
-	**Innovation**: Encouraging continuous development and integration of cutting-edge technologies to drive digital transformation and economic growth.
-	**Collaboration**: Fostering a cooperative environment where participants can freely share knowledge, resources, and services to achieve common goals.
-	**Security**: Implementing robust mechanisms to protect data and ensure secure digital interactions across the ecosystem.
-	**Sustainability**: Supporting environmentally and economically sustainable business practices through efficient and decentralized technologies.
-	**Compliance**: Adhering to European regulations and the Gaia-X Trust Framework to meet legal and ethical standards.

## Getting started

This is a [Vocs](https://vocs.dev) project.

```bash
git clone https://github.com/deltaDAO/pontusx-docs.git
cd pontusx-docs
npm install
```

Start the documentation in development mode
```bash
npm run dev
```
