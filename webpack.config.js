<!-- vRlX25u94x -->
const
   fs = require( 'fs' ),
   path = require( 'path' ),
   webpack = require( "webpack" ),
   HTMLWebpackPlugin = require( 'html-webpack-plugin' ),
   {CleanWebpackPlugin} = require( 'clean-webpack-plugin' ),
   MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
   CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' ),
   TerserPlugin = require( 'terser-webpack-plugin' )

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

// получить вложенные папки
const getFiles = (dir, files_) => {

   files_ = files_ || []
   const files = fs.readdirSync( dir )
   for (let i in files) {
      const name = dir + '/' + files[i]
      if (fs.statSync( name ).isDirectory()) {
         getFiles( name, files_ )
      } else {
         const splitName = name.split( '/' )
         splitName.splice( -1, 1 )
         const dirFolder = splitName.join( '/' )
         files_.push( path.win32.join( __dirname, dirFolder ) )
      }
   }
   return Array.from( new Set( [...files_] ) )
}

module.exports = {
   mode: 'development',
   entry: { // точка входы
      main: './main.js'
   },
   context: path.win32.resolve( __dirname, 'src' ),
   output: { // точка вывода
      filename: 'bundle.js',
      path: path.win32.resolve( __dirname, 'dist' )
   },
   devServer: { // сервер
      contentBase: path.win32.join( __dirname, 'dist' ),
      port: 3000,
      open: false,
      overlay: true,
      stats: 'errors-only',
   },
   resolve: {
      extensions: ['.css', '.scss', '.js', '.json'],
      alias: {
         '@': path.win32.resolve( __dirname, 'src' ) // корневая папка
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
            const jsonFiles = fs.readdirSync( 'src/json' )
            const jsonProps = {}
            jsonFiles.forEach( file => {
               const fileName = file.split( '.' )[0]
               jsonProps[fileName] = require( './src/json/' + file )
            } )
            return jsonProps
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
               helperDirs: getFiles( './src/helpers' ),
               partialDirs: getFiles( './src/components' )
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