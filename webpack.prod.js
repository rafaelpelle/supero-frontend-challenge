const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
				cache: true,
				parallel: true,
				terserOptions: {
					warnings: false,
					ecma: 8,
					compress: {
						inline: false,
					},
				},
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	plugins: [
		new CompressionPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0,
			cache: true,
		}),
	],
})
