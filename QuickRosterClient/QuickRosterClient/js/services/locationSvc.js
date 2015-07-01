'use strict';
var app = angular.module('inspinia');
app.factory('locationSvc', ['$resource', '$q', function ($resource, $q) {
    // var resource = $resource('/api/Location/:section/:id', { section: '@section', id: '@id' });
    return {
        getModel: function () {
            //call get
            return getFakeLocationList();
        },

        deleteLocation: function (locationID) {
            //call delete  
        },

        updateLocation: function (location) {
            // call update
        },

        addLocation: function (location) {
            // call add
        }

       
    };
}]);



function getFakeLocationList() {

    var list = [{
        "LocationId": 1,
        "LocationName": "Lygon Street",
        "Color": "#02951a",
        "Description": "You asked, Font Awesome delivers with 40 shiny new icons in version You asked, Font Awesome delivers with 40 shiny new icons in version "

    }];
    return list;

}
