define(['backbone', 'views/game', 'views/main', 'views/scores'], function (Backbone, GameView, MainView, ScoresView) {
	var gameView = new GameView();

	var mainView = new MainView();

	var scoresView = new ScoresView();
	
	return Backbone.Router.extend({
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
});
