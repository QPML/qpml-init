# QPML-init

**未リリース**

QPMLを使ったプロジェクトのテンプレートを[gruntjs/grunt-init](https://github.com/gruntjs/grunt-init)を利用して生成します。

## インストール

[gruntjs/grunt-init](https://github.com/gruntjs/grunt-init)を利用しています。  
`grunt-init`は **リリース前** のプロジェクトです。  
**npmで通常インストールできるバージョンでは正しく動作しません。**  
現時点で動作が確認できている`grunt-init`のバージョンは`0.2.0rc3`です。  
本カスタムテンプレートを`grunt-init`の最新バージョンでテストする以外の目的では以下のコマンドで`0.2.0rc3`をインストールしてください。  
`[sudo] npm install -g git://github.com/gruntjs/grunt-init.git#0b29125b8a3536c5b11487da88d07c1541b274ff`

## テンプレート

### h5bp

[HTML5
Boilerplate](http://html5boilerplate.com/)を利用したQPML用のテンプレートを生成します。

### skelton

[Skeleton](http://www.getskeleton.com/)を利用したQPML用のテンプレートを生成します。

## 利用方法

新たに作成するレポジトリ用の **ディレクトリ内** で

`grunt-init clone後のディレクトリ`

または本レポジトリ内のディレクトリを`~/.grunt-init/`内にコピーしておくと:

`grunt-init h5bp`

でHTML5 Boilerplateを利用したテンプレートを

`grunt-init skelton`

でSkeletonを利用したテンプレートを生成できます。

**注意:
コマンドを実行するディレクトリ内のすべてのファイル、ディレクトリは上書きされてしまう可能性があります。必ず空のディレクトリで実行してください。**
