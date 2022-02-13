const path = require('path');       //absolute path


module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',                       //can be prod | dev | none
    //entry point/file for webpack
    entry: './src/index.ts',
    module: {
        rules: [
            {
                //regex for ts file to be ending in .ts
                test: /\.ts$/,          //1-if files in source folder end in .ts
                use: 'ts-loader',       //2-use ts-loader to compile them into js
                include: [path.resolve(__dirname, 'src')]
                       
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    //OUTPUT POINT or FILE
    output: {
        publicPath: 'public',      // specify in memory where to serve the code from
        filename: 'bundle.js',      //3-and output will be bundled here
        path: path.resolve(__dirname, 'public')   // (current location, absolute path)
    }
}