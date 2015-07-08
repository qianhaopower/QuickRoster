'use strict';

var app = angular.module('inspinia');

app.controller('PersonnelDetailCtrl', ['$scope', '$modalInstance', 'itemToEdit', function ($scope, $modalInstance, personnel) {

    $scope.message = 'message for Personnel Detail Modal View';

    
  

    $scope.personnel = personnel;

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
            if (personnel.DateOfBirth && typeof (personnel.DateOfBirth) != "string") {
                var isoDate = personnel.DateOfBirth.toISOString();
                personnel.DateOfBirth = isoDate;
                
            }


            $modalInstance.close(data);
        } else {
            //should not hit here. Save button should be disabled until valid
           // utils.setInvalidsDirty(form);
        }
    };
   

}]);

