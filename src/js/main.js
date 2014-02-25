require.config({
	urlArgs: "_=" + (new Date()).getTime(),
	baseUrl: 'js',
	paths: {
		backbone: 'lib/backbone',
		jquery: 'lib/jquery',
		underscore: 'lib/underscore'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		}
	}
});

define(['router'], function () {
	jQuery(function () {
		Backbone.history.start();
	});
});
