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

define(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
	Backbone.sync = $.noop;
	
	new Router();

	$(function () {
		Backbone.history.start();
	});
});
