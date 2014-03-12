define(['backbone', 'models/placeholder'], function (Backbone, Placeholder) {
	return Backbone.Collection.extend({
		initialize: function () {

		},

		model: Placeholder
	});
});
