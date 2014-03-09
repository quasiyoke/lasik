define(['views/view', 'tmpl/score'], function (View, tmpl) {
	var ScoreView = View.extend({
		tagName: 'tr',

		className: 'scores__table-row',
		
		template: tmpl
	});

	return ScoreView;
});
