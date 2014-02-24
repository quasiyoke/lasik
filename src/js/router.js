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

define(['backbone', 'views/game', 'views/main', 'views/scores'], function (Backbone, GameView, MainView, ScoresView) {
	var gameView = new GameView();

	var mainView = new MainView();

	var scoresView = new ScoresView();
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'main',
			game: 'game',
			scores: 'scores'
		},
		game: function () {
			this.switchTo(gameView);
		},
		main: function () {
			this.switchTo(mainView);
		},
		scores: function () {
			this.switchTo(scoresView);
		},
		switchTo: function (view) {
			if (this.currentView) {
				this.currentView.hide();
			}
			view.show();
			this.currentView = view;
		}
	});
	
	return new Router();
});
