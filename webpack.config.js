const path = require("path");

module.exports = {
    mode :"development",
    // webpack-dev-server用の設定
    devServer: {
        open: true,
        openPage: "index.html",
        //node_project以下のpublicというディレクトリがコンテンツルートディレクトリであるという設定
        contentBase: path.join(__dirname, "public"),
        watchContentBase: true,
        port: 8080,
    },
    // エントリー：複数のjsファイルをimportしているファイル
    // appというキーに対して./src/index.jsがエントリーとしてセットされている
    entry: {app: './src/index.js'},
    output: {
        path: path.join(__dirname, "dist"),
        // ブラウザからバンドルにアクセスする際のjsのパスを指定
        publicPath:"/js/",
        // バンドルjsのファイル名をセット
        filename:'[name].js',
        // パッケージ名をセット
        library: ["com", "example"],
        // ライブラリ化の方式を設定
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "targets": "> 0.25%, not dead"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    // ソースマップの出力を有効に設定
    devtool: 'inline-source-map'
};