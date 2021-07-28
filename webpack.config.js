const
   path = require( 'path' ),
   webpack = require( "webpack" ),
   HTMLWebpackPlugin = require( 'html-webpack-plugin' ),
   {CleanWebpackPlugin} = require( 'clean-webpack-plugin' ),
   MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
   CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' ),
   TerserPlugin = require( 'terser-webpack-plugin' )

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
   mode: 'development',
   context: path.resolve( __dirname, 'src' ),
   entry: { // точка входы
      main: './main.js'
   },
   output: { // точка вывода
      filename: 'bundle.js',
      path: path.resolve( __dirname, 'dist' )
   },
   devServer: { // сервер
      contentBase: path.join( __dirname, 'dist' ),
      port: 3000,
      open: false,
      overlay: true,
      stats: 'errors-only',
   },
   resolve: {
      extensions: ['.css', '.scss', '.js', '.json'],
      alias: {
         '@': path.resolve( __dirname, 'src' ) // корневая папка
      }
   },
   plugins: [
      new webpack.ProvidePlugin( {
         $: 'jquery',
         jQuery: 'jquery',
      } ),
      new HTMLWebpackPlugin( {
         title: 'MF',
         filename: 'index.html', // html на выходе
         template: './index.hbs', // шаблон
         templateParameters() { // данные шаблона
            const tariffs = require( './src/json/tariffs' )
            const performance = require( './src/json/performance' )
            const info = require( './src/json/info' )
            const cities = require( './src/json/cities' )
            const unite = require( './src/json/unite' )

            return {tariffs, performance, info, cities, unite}
         },
         minify: isProd, // минимизировать html
      } ),
      new MiniCssExtractPlugin( {
         filename: 'style.css', // css на выходе
      } ),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.hbs$/,
            loader: "handlebars-loader",
            options: {
               helperDirs: [
                  path.join( __dirname, 'src', 'helpers' )
               ],
               partialDirs: [
                  path.join( __dirname, 'src', 'components' ),
                  path.join( __dirname, 'src', 'components', 'modals' ),
               ]
            }
         },
         {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
         },
         {
            test: /\.(woff|woff2)$/,
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
            }
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
            }
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ]
   },
   optimization: {
      minimizer: [  // минимизировать
         new CssMinimizerPlugin(), // css
         new TerserPlugin() // js
      ],
   },
}