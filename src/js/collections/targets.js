define(['backbone', 'models/target'], function (Backbone, Target) {
	return Backbone.Collection.extend({
		initialize: function () {
			
		},

		model: Target
	});
});
