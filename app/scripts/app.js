var PicoOrder = window.PicoOrder = Ember.Application.create({
    LOG_TRANSITIONS: true
});

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

PicoOrder.Router.map(function() {
    this.route("login");
    this.route("faq");
    this.route("pricing");
});