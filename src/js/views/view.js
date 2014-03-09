define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		hide: function () {
			this.$el.hide();
		},

		initialize: function () {
			this.render();
		},
		
		render: function () {
			var context = this.model && this.model.toJSON();
			this.$el.html(this.template(context));
			return this;
		},

		show: function () {
			if (this.$el.parent().length) {
				this.$el.show();
			} else {
				this.$el.appendTo('body');
			}
		}
	});
});
