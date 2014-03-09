define(['jquery', 'views/view', 'tmpl/game', 'views/game-score'], function ($, View, tmpl, ScoreView) {
	var GameView = View.extend({
		template: tmpl,

		delegate: function () {
			$(window).on('resize', this.onWindowResize);
			this.score.targets.on('add', this.onTargetAdd, this);
		},

		hide: function () {
			GameView.__super__.hide.call(this);
			this.score.stop();
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
			this.score.trigger('resize');
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
			this.score = this.collection.create({ score: 0});
			this.score.start();
			this.scoreView = new ScoreView({
				el: this.$('.game__scene-score'),
				model: this.score
			});
			this.delegate();
			this.resizeScene();
		},

		undelegate: function () {
			$(window).off('resize', this.onWindowResize);
			this.score.targets.off('add', this.onTargetAdd, this);
			this.scoreView.undelegate();
		}
	});
	
	return GameView;
});
