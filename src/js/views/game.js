define(['jquery', 'views/view', 'tmpl/game', 'views/game-score', 'collections/placeholders'], function ($, View, tmpl, ScoreView, Placeholders) {
	/**
		 Game scene view. Holds scene scaling on window resizing, score view `GameScoreView` and etc.

		 Game scene initializes by router, so the game starts when `show` method is called, so `show` method contains a lot of initializations and calculations.
	 */
	var GameView = View.extend({
		template: tmpl,

		delegate: function () {
			$(window).on('resize', this.onWindowResize);
			this.game.targets.on('add', this.onTargetAdd, this);
		},

		hide: function () {
			GameView.__super__.hide.call(this);
			this.game.stop();
			this.undelegate();
		},

		initialize: function () {
			GameView.__super__.initialize.call(this);
			this.sceneEl = this.$('.game__scene');
			_.bindAll(this, 'onWindowResize');
		},

		onTargetAdd: function (target) {

		},

		onWindowResize: function () {
			this.resizeScene();
			this.game.trigger('resize');
		},

		render: function () {
			GameView.__super__.render.call(this);
		},

		resizeScene: function () {
			var K = 4 / 3;
			var height = $(window).height();
			var width = height * K;
			if (width > $(window).width()) {
				width = $(window).width();
				height = width / K;
			}
			this.sceneEl.css({
				width: width,
				height: height
			});
		},

		show: function () {
			GameView.__super__.show.call(this);
			this.game = this.collection.create({ score: 0});
			this.game.placeholders = new Placeholders(_.map(this.$('.game__scene-target-placeholder'), function (el) {
				var element = $(el);
				return {
					size: element.height(),
					width: element.width()
				};
			}));
			this.game.start();
			this.scoreView = new ScoreView({
				el: this.$('.game__scene-score'),
				model: this.game
			});
			this.delegate();
			this.resizeScene();
		},

		undelegate: function () {
			$(window).off('resize', this.onWindowResize);
			this.game.targets.off('add', this.onTargetAdd, this);
			this.scoreView.undelegate();
		}
	});
	
	return GameView;
});
