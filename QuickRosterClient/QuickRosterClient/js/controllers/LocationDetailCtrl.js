'use strict';

var app = angular.module('inspinia');

app.controller('LocationDetailCtrl', ['$scope', '$modalInstance', 'itemToEdit', function ($scope, $modalInstance, location) {

    $scope.message = 'message for location detail Modal View';

    $scope.location = location;

    $scope.cancel = function (form) {
        if (form.$dirty) {
            var r = confirm("You have made changes on this page, if you click OK the page will close and these changes will be disregarded.");
            if (r === true) {
                $modalInstance.dismiss('close');
            };
        } else {
            $modalInstance.dismiss('close');
        }
    };

    $scope.saveAndClose = function (data, form) {
        if (form.$valid) {
            //put pre-save logic here.

            $modalInstance.close(data);
        } else {
            //should not hit here. Save button should be disabled until valid
            // utils.setInvalidsDirty(form);
        }
    };


}]);

