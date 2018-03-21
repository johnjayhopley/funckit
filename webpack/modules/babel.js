module.exports = (production) => {
	return {
		test: /\.(js|jsx|ts)$/,
		use: [{
		  loader: 'babel-loader',
		  options: {
		    sourceMap: (production) ? false : true
		  }
		}],
		exclude: '/node_modules/',
	}
}