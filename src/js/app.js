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
		template: gameTmpl
	});

	var MainView = View.extend({
		template: mainTmpl
	});

	var ScoresView = View.extend({
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
		
		Bb.history.start();
	});
})(jQuery, Backbone);
