define(['backbone', 'models/game'], function (Backbone, Game) {
	return Backbone.Collection.extend({
		comparator: function (a, b) {
			return b.get('score') - a.get('score');
		},
		
		initialize: function () {
			this.reset([
				{ name: 'Eve', score: 300},
				{ name: 'John', score: 100},
				{ name: 'Pete', score: 200},
				{ name: 'Tim', score: 400}
			]);
		},

		model: Game
	});
});
