var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log(id);
    }
};

app.initialize();


var application = angular.module('InventoryApplication', ['ngMaterial', 'ngRoute', 'ngMessages']);

