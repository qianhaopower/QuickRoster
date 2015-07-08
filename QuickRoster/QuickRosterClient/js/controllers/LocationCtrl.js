'use strict';

var app = angular.module('inspinia');

app.controller('LocationCtrl', ['$scope', 'modalSvc', 'locationSvc', function ($scope, modalSvc, locationSvc) {

    $scope.message = 'message for location';
    $scope.locationList = locationSvc.getModel();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.templateUrl = '/views/management/locationDetail.html';
    $scope.controllerName = 'LocationDetailCtrl';

    $scope.openLocationDetails = function (location) {

        var clone = JSON.parse(JSON.stringify(location));
        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, location, null);

    };

    $scope.onSaveCallFromModal = function (locationMofified) {

        //Post the modified object to server. 
        if (locationMofified.LocationId == -1) {
            //new location
            locationSvc.addLocation(locationMofified);
        } else {
            //modify exsiting
            locationSvc.updateLocation(locationMofified);
        }


    };

    $scope.onCancelCallFromModal = function () {
        // do nothing. 
    };


    $scope.addNew = function () {
        var newLocation = { LocationId: -1 };

        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newLocation, null, null);
    };

    $scope.deleteLocation = function (location) {
        if (location && location.LocationId > 0) {
            locationSvc.deleteLocation(location.LocationId);
        }

    };


}]);

