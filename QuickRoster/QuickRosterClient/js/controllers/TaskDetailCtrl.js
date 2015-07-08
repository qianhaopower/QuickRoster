'use strict';

var app = angular.module('inspinia');

app.controller('TaskDetailCtrl', ['$scope', '$modalInstance', 'itemToEdit', function ($scope, $modalInstance, task) {

    $scope.message = 'message for task detail Modal View';
    if (task.Rate && typeof (task.Rate) == "string") {
        var rate = parseFloat(task.Rate);
        if (rate)
            task.Rate = rate;
        else
            task.Rate = 0;
    }


    $scope.task = task;

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

