import eslint from './modules/eslint';
import babel from './modules/babel';

module.exports = (production) => {
  return {
	  rules: [
	    eslint(production),
	    babel(production),
	  ]
  }
};