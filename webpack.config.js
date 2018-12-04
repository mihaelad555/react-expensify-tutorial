const path =require('path');
//entry point - output
//console.log(path.join(__dirname,'public'));
module.exports ={
    entry:'./src/app.js',
    mode: 'development',
    output: {
        path: '/Users/mihaelad/udemytotorials/expensify-app/public', ////path.join/(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        },
    {
        test:/\.s?css$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ] 

    }
    ]
    },
    devtool:'cheap-module-eval-source-map',
     devServer: {
        contentBase: '/Users/mihaelad/udemytotorials/expensify-app/public',
        historyApiFallback:true
 }
};