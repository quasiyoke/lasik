define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		hide: function () {
			this.$el.hide();
		},
		
		render: function () {
			this.$el.html(this.template());
		},

		show: function () {
			if (this.$el.parent().length) {
				this.$el.show();
			} else {
				this.$el.appendTo('body');
				this.render();
			}
		}
	});
});
