module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,		
		"sourceType": "module",
		"allowImportExportEverywhere": true
		  
	},
	"rules": {		
		"linebreak-style": [
			"error",
			"windows"
		],		
		"semi": [
			"error",
			"always"
		]
	}
};