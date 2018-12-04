const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log(env);
    //entry point - output
    //console.log(path.join(__dirname,'public'));
    return {
        entry: './src/app.js',
        mode: 'development',
        output: {
            path: '/Users/mihaelad/udemytotorials/expensify-app/public', ////path.join/(__dirname,'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ]
                    })

                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: '/Users/mihaelad/udemytotorials/expensify-app/public',
            historyApiFallback: true
        }
    }
};