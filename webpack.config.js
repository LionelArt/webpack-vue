const path = require('path');
const webpack = require('webpack');

// 通用路径
const PATHS = {
	src: path.join(__dirname, 'src'),
	public: path.join(__dirname, 'public')
};

module.exports = {
	// 口文件
	entry: path.resolve(PATHS.src, 'main.js'),
	output: {
		// 打包存放目录
		path: PATHS.public,
		publicPath: '/',
		// 打包输出文件名
		filename: 'build.js'
	},

	// Loaders
	module: {
		rules: [{
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader'
			}]
		}, {
			test: /\.js$/,
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},

	// webpack-dev-server是一个轻量的node.js express服务器
	// webpack-dev-server的作用是用来伺服资源文件，不能替代后端服务器
	devServer: {
		// 本地服务器所加载页面所在目录
		contentBase: './public',
		// 实时刷新
		inline: true,
		// 所有跳转指向index.html
		historyApiFallback: true,
		// 监听端口
		port: 8888,
		stats: {
			colors: true
		}
	}
};