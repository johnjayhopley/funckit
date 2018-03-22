module.exports = (env) => {
	let production = (env.prod) ? true : false;

	return {
		context: require('./webpack/context')(),
		entry: require('./webpack/entry')(),
		output: require('./webpack/output'),
		watch: require('./webpack/watch')(production),
		devtool: require('./webpack/devtool')(production),
		resolve: require('./webpack/resolve'),
		module: require('./webpack/module')(production),
		plugins: require('./webpack/plugins')(production),
	};
}
