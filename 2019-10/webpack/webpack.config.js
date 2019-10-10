const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [require('autoprefixer')];
							}
						}
					}
				]
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './assets/img'
					}
				}
			}
		]
	},
	devServer: {
		port: 3000,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};
