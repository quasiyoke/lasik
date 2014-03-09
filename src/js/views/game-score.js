define(['views/view'], function (View) {
	var GameScoreView = View.extend({
		delegate: function () {
			this.model.on('change:score', this.onScoreChange, this);
		},

		highlight: function () {
			this.valueEl.animate({
				fontSize: '200%'
			}, {
				duration: 300,
				queue: false,
				complete: function () {
					this.valueEl.animate({
						fontSize: '100%'
					}, {
						duration: 300,
						queue: false
					});
				}.bind(this)
			});
		},
		
		initialize: function () {
			this.valueEl = this.$('.game__scene-score-value');
			GameScoreView.__super__.initialize.call(this);
			this.delegate();
		},

		onScoreChange: function () {
			this.updateValue();
			this.highlight();
		},

		render: function () {
			this.updateValue();
		},

		undelegate: function () {
			this.model.off('change:score', this.onScoreChange, this);
		},

		updateValue: function () {
			this.valueEl.text(this.model.get('score'));
		}
	});

	return GameScoreView;
});
