/// <reference path= "/scripts/knockout-2.0.0.debug.js" />

$(function () {
    var viewModel = {
        firstName: ko.observable("John")
    };
    ko.applyBindings(viewModel);
})