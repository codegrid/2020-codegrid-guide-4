# 型が不要な TypeScript の開発環境

型を用いず普通の JavaScript を書く感覚で開発できる、TypeScript の開発環境を用意しました。Node.js を事前にインストールしておき、次の手順で試してください。

## はじめ方

ターミナルを起動して、次のように入力すると TypeScript、webpack を始めとしたビルド環境が構築されます。

```
npm install
```

次のように入力すると、TypeScript によるコンパイルが監視モードで実行します（ソースコードが変更される都度コンパイルされます）。

```
npm run dev
```

別のターミナルを起動（もしくはターミナルの画面を分割）して、次のように入力すると HTTP サーバが起動します。

```
npm start
```

localhost:8080 にブラウザでアクセスすると次のように、簡単なアプリケーションが動作するようになっています。

![](./demo.gif)

## ライブラリのための型定義ファイル

実際にこの環境をベースに開発をはじめた場合、ライブラリを利用したくなる場合もあるでしょう。

モジュールとして提供されているライブラリであれば、npm コマンドでインストールし、シリーズの第 3 回で紹介したモジュール記事で解説されている方法で利用できます。しかし、CDN で提供されるライブラリのように、`<script>`タグで読み込む必要があるケースでは、簡単な型定義を追記し、その存在を TypeScript に伝える必要があります。

このようなケースの型定義の追記方法については、次の記事を参考にしてください。

- [自分で書く、型定義ファイル - グローバルスコープのライブラリ-1](https://app.codegrid.net/entry/2019-ts-type-definition-1)

また、サンプルとして実装しているコードでは、moment.js をモジュールとして読み込み、jQuery を CDN から読み込み型定義を追記しています。それぞれ次の箇所で行っているので、こちらも併せて参考にしてみてください。

- moment.js の読み込み箇所
  - https://github.com/codegrid/2020-codegrid-guide-4/blob/master/src/index.ts#L1
- jQuery の型定義の追記箇所
  - https://github.com/codegrid/2020-codegrid-guide-4/blob/master/types/global.d.ts#L1-L2

## 徐々に型を導入する

型を書かない TypeScript に慣れたら、徐々に型を導入していくのも良いでしょう。次のシリーズでは、型が不要なケースと併せ、型があることによるメリットを座談会形式で語られています。

- [JavaScript の「型」について考える シリーズ](https://app.codegrid.net/series/2018-type-talk)

また、この環境設定では、次のコンパイルオプションを徐々に有効にしていくことで、TypeScript が標準設定として推奨するコンパイルチェックを適用していくことができます。

- https://github.com/codegrid/2020-codegrid-guide-4/blob/master/tsconfig.json#L16-L23

```js
"noImplicitAny": false ,
"strictNullChecks": false ,
"strictFunctionTypes": false ,
"strictBindCallApply": false ,
"strictPropertyInitialization": false ,
"noImplicitThis": false ,
```

コンパイルオプションの詳細は、次のドキュメントを参照ください。

- [Compiler Options · TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
