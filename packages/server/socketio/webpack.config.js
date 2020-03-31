var path = require("path");
// Module not found: Error: Can't resolve 'uws' in '**/node_modules/engine.io/lib'
var nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "development",
	target: "node",
	devtool: "inline-source-map",
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			"@share": path.resolve(__dirname, "../../share"),
		},
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }],
	},
	externals: [nodeExternals()],
};
