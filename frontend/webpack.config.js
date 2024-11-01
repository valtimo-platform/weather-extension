//webpack.config.js
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/public_api.ts",
    },
    output: {
        path: path.resolve(__dirname, '../src/main/resources/public'),
        filename: "frontend-bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".mjs", ".map" ],
        fullySpecified: false,
        modules: ['node_modules'],
    },
    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    externals: [
        /^@angular/,
        /^@valtimo/,
        /^rxjs/,
    ],
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.(ts|tsx)?$/
            },
            {
                resolve: {
                    fullySpecified: false,
                },
            }
        ]
    }
};