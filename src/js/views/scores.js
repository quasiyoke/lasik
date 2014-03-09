define(['views/view', 'collections/scores', 'tmpl/scores', 'views/score'], function (View, Scores, tmpl, ScoreView) {
	var ScoresView = View.extend({
		initialize: function () {
			this.collection = new Scores();
			ScoresView.__super__.initialize.call(this);
		},

		render: function () {
			ScoresView.__super__.render.call(this);
			var table = this.$('.scores__table');
			this.collection.each(function (score) {
				var view = new ScoreView({ model: score});
				table.append(view.$el);
			});
			return this;
		},
		
		template: tmpl
	});

	return ScoresView;
});

