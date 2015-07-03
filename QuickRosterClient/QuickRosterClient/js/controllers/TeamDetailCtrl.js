'use strict';

var app = angular.module('inspinia');

app.controller('TeamDetailCtrl', ['$scope', '$modalInstance', 'itemToEdit', function ($scope, $modalInstance, team) {

    $scope.message = 'message for team detail Modal View';

    $scope.team = team;

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



    $scope.models = {
        selected: null,
        //lists: { "Personnel in this team": [], "Personnel available": [] }
        lists: { "personnelInTeam": [], "personnelAvailable": [] }
    };

    // Generate initial model
    for (var i = 1; i <= 5; ++i) {
        $scope.models.lists.personnelInTeam.push({ label: "Personnel A" + i });
        $scope.models.lists.personnelAvailable.push({ label: "Personnel B" + i });
    }

}]);

