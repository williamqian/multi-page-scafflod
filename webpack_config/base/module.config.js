/*******************/
/*** module配置 ***/
/******************/

let moduleExports = {
    rules: []
};
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDebug = process.env.NODE_ENV === 'development';
let isAddHash = true;
let isAddSourceMap = true;
let isExtractCss = true;
let isMiniCss = true;
/* 如果是开发环境，则在文件名后加hash （抽离出的css文件名是否加hash需要在plugins.config.js里配置）,且css加source-map、不抽离css、不压缩css*/
if (isDebug) {
    isAddHash = true;
    isAddSourceMap = true;
    isExtractCss = false;
    isMiniCss = false;
}
/* 如果是生产环境，则在文件名后加hash（抽离出的css文件名是否加hash需要在plugins.config.js里配置），且css不加source-map、抽离css、压缩css */
else {
    isAddHash = true;
    isAddSourceMap = false;
    isExtractCss = true;
    isMiniCss = true;
}

/* 基础规则，html、js、mp4、图片、字体 */
moduleExports.rules = [{
    test: /\.html$/,
    loader: "ejs-loader"
}, {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
}, {
    test: /\.mp4$/,
    loader: "file-loader?name=video/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}, {
    test: /\.(png|jpg|gif)$/,
    loader: "file-loader?name=img/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file-loader?name=fonts/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}, {
    test: /\.(woff|woff2)$/,
    loader: "url-loader?prefix=font/&limit=8192&name=fonts/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=8192&mimetype=application/octet-stream&name=fonts/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=8192&mimetype=image/svg+xml&name=fonts/[name]" + (isAddHash ? ".[hash:8]" : "") + ".[ext]"
}];

/* css less sass*/
let cssRule = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: isAddSourceMap,
            minimize: isMiniCss
        }
    },
    {
        loader: "postcss-loader",
        options: {
            sourceMap: isAddSourceMap,
            plugins: [require('autoprefixer')({
                browsers: ['last 5 versions']
            })]
        }
    }
];
let lessRule = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: isAddSourceMap,
            minimize: isMiniCss
        }
    },
    {
        loader: "postcss-loader",
        options: {
            sourceMap: isAddSourceMap,
            plugins: [require('autoprefixer')({
                browsers: ['last 5 versions']
            })]
        }
    },
    {
        loader: 'less-loader',
        options: {
            sourceMap: isAddSourceMap
        }
    }
];
let sassRule = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: isAddSourceMap,
            minimize: isMiniCss
        }
    },
    {
        loader: "postcss-loader",
        options: {
            sourceMap: isAddSourceMap,
            plugins: [require('autoprefixer')({
                browsers: ['last 5 versions']
            })]
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: isAddSourceMap
        }
    }
];
if (isExtractCss) {
    moduleExports.rules.push({
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            publicPath: '../',
            use: cssRule
        })
    });
    moduleExports.rules.push({
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            publicPath: '../',
            use: lessRule
        })
    });
    moduleExports.rules.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            publicPath: '../',
            use: sassRule
        })
    });
} else {
    cssRule.unshift('style-loader');
    lessRule.unshift('style-loader');
    sassRule.unshift('style-loader');
    moduleExports.rules.push({
        test: /\.css$/,
        use: cssRule
    });
    moduleExports.rules.push({
        test: /\.less$/,
        use: lessRule
    });
    moduleExports.rules.push({
        test: /\.scss$/,
        use: sassRule
    });
}
module.exports = moduleExports;