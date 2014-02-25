define(['views/view', 'collections/scores', 'tmpl/scores', 'views/score'], function (View, Scores, tmpl, ScoreView) {
	var ScoresView = View.extend({
		initialize: function () {
			this.collection = new Scores();
		},

		render: function () {
			ScoresView.__super__.render.call(this);
			var table = this.$('.scores__table');
			this.collection.each(function (score) {
				table.append(new ScoreView({ model: score}).render().$el);
			});
			return this;
		},
		
		template: tmpl
	});

	return ScoresView;
});

