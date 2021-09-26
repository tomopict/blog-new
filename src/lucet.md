# Lucet

- コンパイラ
  実行環境

クライアントだけではなく edge でも使う可能性が出てきた

# NUXTjs で中規模サービスを統合した話

- ebookjapna
  webpack bandle analyzer

# WebAppCheckList

- 適切なレンダリングパターンを選択
  +SSR
  +FCP が早い
  SSR with hydration
  isomorphic web
  TTI が遅くなりがち
- 安定したサーバーレスポンス
  CDN キャッシュ-fastly
  Surrogate key
  イベント駆動キャッシュパージ
- 圧縮したメディアフォーマット
  ImageOptim
  fastly imageoptimyzer
  Webp 配信
  pixcelRation 指定
  サムネイルクオリティ指定
- 画像遅延読み込み
  lazyload
  img loding=lazy
  スクリプトの遅延読み込み
  <script type="module" src="src/components/voice-app.js" crossorigin=""></script>
- パフォーマンスバジェット
  予算オーバーするとデプロイにできないようにする
- スレッドの分割
  off the main thred
  WebWorker 上での処理を実装
  comlink
  https://github.com/GoogleChromeLabs/comlink
- offline でも利用できる
  PWA
  Service Worker Precahce
  Workbox を利用
- モバイルでもデスクトップでも利用
  カスタムプロパティでのレイアウト指定
  dpr = \${window}
- metadeta の提供
  webappmanifest
- SEO ハックにさようなら
  googlebot が最新になった
- OSS のように開発
  LGTM 良い
  LTTM
- progressive enhancement
  投稿の推奨環境を制限
  閲覧は環境が古いとこでもできる
- 新しい技術
  WEB ShareAPI
  NEtworkInfomationAPI
- 画像代替テキスト
- 文字のコントラスト
  4:5:1 を最低限にする
- 色だけで説明しない
  a11y
  モノクロでチェック
- らしさを再実装しない
- キー操作だけで利用できる
  WAI-ARIA
- フォーカスを可視化する
- スクロール位置を復元
  ブラウザバックとかした時に上に戻ってしまう
  delayed-scroll-restoratio
  https://github.com/janpaul123/delayed-scroll-restoration-polyfill
- 修正削除ができる
  完璧な UI ではなくミスを許容した
  重要なデータは indexedDB に保存
- 継続的なモニタリング
  datadog
  stackdriver サーバー
  sentry
  speedcurve
  firebase performance monitoring

# BFF Developer Experience

ユーザーインターフェイスをメンテナンスしているチームがメンテナンスされる
マイクロサービス統合のため
FOLIO における BFF
ブラウザからのリクエスト、モバイルアプリで別れている
API Aggregation node.js koa
複数の API の処理をまとめる
Server Side Renderginf React + redux

BFF を楽に開発するために

1. バックエンドの開発を待たない
   仕様用の合意が取れていれば良い
   IDL swagger
   Thrift という RPC フレームワーク
   型システムを備えた IDL
   IDL からクライアントコードの生成が可能
   IDL をつくて、自動生成

2.サービスの仮データが必要
モックデータを差し替えたい
関心ごとの分離
DFF の主処理：特定のマイクロサービスに処理を依頼する
横断的関心ごと；マイクロサービスの戻りちをモックする
Aspect Oriented Programming
横断的関心ごとを分離すること
DirectProxy
AST を変換して AST を行う
AST Transformation

ダイレクトプロクシ
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy

# Web 標準で作るガラーサイト

KaiOS
ソフト面ではスマホ
3 億７千万台があと 3 年くらいで伸びるんじゃないか
デバイスが 3000 円以下
twitter は対応している

ブラウザで動く必要性
キャリアとくっついている
アプリとかはキャリアが握っているので、ユーザーにリーチしづらい
WASM を使ったスクーシュ
開発期間 1 ヶ月
初めての部分
WebGL 対応
KaiOS 対応

1 コードで作る
off the main thread
Web Workder で動かす
comlink の作者がいた
preack で作成
ビルドプロセスで Pre-render
Puppeteer を使用
build 時に rendring してそれを index.html にかいて、sttatic にアップロードする
全てを tacle にして、その中に button を複数入れる、一つクリックすると全部レンダーする
composite
layer タブで
requestAnimationFrame を使用している

画像は code ベースで作成する形になる
１回目は indexedDB に保存

フリマ的にサイトの中で色々と動く
VR と相性は良さそう

アクセシビリティを考えて canvas のうえに DOM を opacity0 で重ねている
table.setAttribvute("role", "grid")
tr,setAtturyvyte("role", "grid")
td.setAtturyvyte("role", "grid")

loadingTabIndex
tabindex=0
他は tabindex=-1

css で focus を消す
focus-visible polyfill

WEBGL の higho fragment shader が動いているかどうか
アニメができるかどうか

クリックすると websocket で like がつく、並んでいる量がつく

キーガイドの表示
ショートカットの表示

rollup.js を使用して split
webpack がつらい
https://qiita.com/jkr_2255/items/63b6926ebbef5d3e979b

rollup-plugin-loadz0r
https://github.com/surma/rollup-plugin-loadz0r

I made stuff smaller

https://github.com/Proxx

travis で size report
https://github.com/GoogleChromeLabs/travis-size-report

JS はできるだけ WebWorker に出す
見た目以外でデザインする意思疎通
ちょっと相談して見よという文化
実際に体験するサポートは手厚い

https://proxx.app/
https://web.dev/

node で編み物
WebGL
損きりがすごい
