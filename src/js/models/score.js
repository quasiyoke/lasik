define(['backbone', 'collections/targets'], function (Backbone, Targets) {
	return Backbone.Model.extend({
		initialize: function () {
			_.bindAll(this, 'onCreateTarget');
		},
		
		onCreateTarget: function () {
			if (this.started) {
				this.targets.create();
				this.sleepAndCreateTarget();
			}
		},
		
		sleepAndCreateTarget: function () {
			setTimeout(this.onCreateTarget, Math.random() * 500);
		},
		
		start: function () {
			this.started = true;
			this.targets = new Targets();
			this.sleepAndCreateTarget();
		},

		stop: function () {
			this.started = false;
		}
	});
});
