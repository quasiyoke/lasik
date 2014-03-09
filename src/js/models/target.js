define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		initialize: function () {
			setTimeout(function () {
				this.destroy();
			}.bind(this), 1000);
		}
	});
});
