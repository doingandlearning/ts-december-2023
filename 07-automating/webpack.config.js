const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("node:path")

module.exports = {
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	]
}



// __dirname
// __filename