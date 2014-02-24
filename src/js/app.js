(function ($, Bb) {
	'use strict';

	var View = Bb.View.extend({
		render: function () {
			var element = $('<div>')
				.appendTo(this.$el)
			;
			this.setElement(element);
			this.$el.html(this.template());
		},

		remove: function () {
			var element = this.$el.parent();
			View.__super__.remove.call(this);
			this.setElement(element);
		}
	});

	var GameView = View.extend({
		events: {
			'click .game__back': 'onBackClick'
		},
		onBackClick: function (e) {
			e.preventDefault();
			router.navigate('', { trigger: true});
		},
		template: gameTmpl
	});

	var MainView = View.extend({
		events: {
			'click .main__game': 'onGameClick',
			'click .main__scores': 'onScoresClick'
		},
		onGameClick: function (e) {
			e.preventDefault();
			router.navigate('game', { trigger: true});
		},
		onScoresClick: function (e) {
			e.preventDefault();
			router.navigate('scores', { trigger: true});
		},
		template: mainTmpl
	});

	var ScoresView = View.extend({
		events: {
			'click .scores__back': 'onBackClick'
		},
		onBackClick: function (e) {
			e.preventDefault();
			router.navigate('', { trigger: true});
		},
		template: scoresTmpl		
	});

	var Router = Bb.Router.extend({
		routes: {
			'': 'main',
			game: 'game',
			scores: 'scores'
		},
		game: function () {
			this.switchTo(views.game);
		},
		main: function () {
			this.switchTo(views.main);
		},
		scores: function () {
			this.switchTo(views.scores);
		},
		switchTo: function (view) {
			if (this.currentView) {
				this.currentView.remove();
			}
			view.render();
			this.currentView = view;
		}
	});
	
	var router = new Router();

	var views;

	$(function () {
		var container = $('.container');
		views = {
			game: new GameView({
				el: container
			}),
			main: new MainView({
				el: container
			}),
			scores: new ScoresView({
				el: container
			})
		};
		
		Bb.history.start({
			pushState: true
		});
	});
})(jQuery, Backbone);
