define(['backbone'], function (Backbone) {
	return Backbone.View.extend({
		hide: function () {
			this.$el.hide();
		},
		
		render: function () {
			var context = this.getContext && this.getContext();
			this.$el.html(this.template(context));
			return this;
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
