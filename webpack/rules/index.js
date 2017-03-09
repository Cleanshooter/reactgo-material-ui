const image = require('./image');
const javascript = require('./javascript');
const css = require('./css');
const PATHS = require('../paths');

module.exports = ({ production = false, browser = false } = {}) => (
  [
    javascript({ production, browser }),
    css({ production, browser }),
    image(),
    {
    	test: /\.css$/,
	    use: [
	    	browser ? "style-loader" : "isomorphic-style-loader",
	    	browser ? "css-loader" : "css-loader/locals"
	    ],
	    include: PATHS.modules +"/material-grid/"
    }
  ]
);
