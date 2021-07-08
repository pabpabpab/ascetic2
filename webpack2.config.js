const path = require('path');


module.exports = {
    mode: 'development',
    // mode: 'production',

    entry: './resources/js2/index.js',

    //devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, 'public/js2'),
        filename: 'bundle.js',
    },

    module: {
        rules: [

            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, 'resources/js2'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },


            {
                test: /\.sass$/i,
                include: path.resolve(__dirname, 'resources/sass2'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },


        ]
    },

    /*
     optimization: {
         minimize: true,
         minimizer: [
             new TerserPlugin({
                 test: /\.js(\?.*)?$/i,
                 //include: path.resolve(__dirname, 'resources/js2'),
             }),
         ],
     },
   */
    /*
        watch: true,
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        },
    */
};
