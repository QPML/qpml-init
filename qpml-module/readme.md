# QPML-init module

**開発者用**

## インストール

[gruntjs/grunt-init](https://github.com/gruntjs/grunt-init)を利用しています。  
`grunt-init`は **リリース前** のプロジェクトです。  
**npmで通常インストールできるバージョンでは正しく動作しません。**  
現時点で動作が確認できている`grunt-init`のバージョンは`0.2.0rc3`です。  
本カスタムテンプレートを`grunt-init`の最新バージョンでテストする以外の目的では以下のコマンドで`0.2.0rc3`をインストールしてください。  
`[sudo] npm install -g git://github.com/gruntjs/grunt-init.git#0b29125b8a3536c5b11487da88d07c1541b274ff`

## 利用方法

新たに作成するレポジトリ用の **ディレクトリ内** で

`grunt-init clone後のディレクトリ`

または本レポジトリ内のディレクトリを`~/.grunt-init/`内にコピーしておくと:

- `grunt-init qpml-module`

上記の例のように`~/.grunt-init/`に作成したディレクトリ名でコマンドを実行できるようになります。

**注意:
コマンドを実行するディレクトリ内のすべてのファイル、ディレクトリは上書きされてしまう可能性があります。必ず空のディレクトリで実行してください。**

ファイル、およびディレクトリが生成されたら、

`npm install`

を実行してください。  
パッケージのインストールが完了したら、

`grunt`

コマンドでjade、stylusの自動コンパイルを行います。

## ファイル/ディレクトリ

```text
module-モジュール名/ = モジュール名はgrunt-init実行時に生成します
  style/       = モジュールスタイル
  script/      = モジュールスクリプト
  markup/      = モジュールマークアップ
screenshot/    = 作成したモジュール部分のみのスクリーンショットを保存
  readme.md    = 作成したモジュールの説明
  Gruntfile.js = Gruntタスク
  .gitignore   = git無視ファイル
  package.json = Grunt.jsなどnode.jsパッケージ用メタファイル
  index.jade   = モジュール作成用 / デモファイル
```

## 開発に際しての注意

現時点では素のスタイルおよびスクリプト、つまりどんな依存も存在しない状態です。  
生成したモジュールは最終的にはQPML全体の中に組み込んで利用することを想定していますので

- normalize.css
- jQuery

少なくともこの2ファイルに関してはモジュール内に置かないようにしてください。  
これ以外の依存に関しては利用頻度を考慮して共通化するべきかを決定したいと思いますので、
利用したライブラリなどについてはREADMEなどに明記しておいてください。

また上記2ファイルについては開発時は、

- normalize.css = //cdnjs.cloudflare.com/ajax/libs/normalize/2.0.1/normalize.css
- jQuery = //cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js

のCDNから呼び出すようにしてください。

