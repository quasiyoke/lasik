define(['views/view', 'tmpl/score'], function (View, tmpl) {
	var ScoreView = View.extend({
		getContext: function () {
			return {
				name: this.model.get('name'),
				score: this.model.get('score')
			};
		},

		render: function () {
			ScoreView.__super__.render.call(this);
			this.setElement(this.$el.children()[0]);
			return this;
		},
		
		template: tmpl
	});

	return ScoreView;
});
