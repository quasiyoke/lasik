define(['backbone', 'collections/scores', 'views/game', 'views/main', 'views/scores'], function (Backbone, Scores, GameView, MainView, ScoresView) {
	var scores = new Scores();
	
	var gameView = new GameView({
		collection: scores
	});

	var mainView = new MainView();

	var scoresView = new ScoresView({
		collection: scores
	});
	
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
