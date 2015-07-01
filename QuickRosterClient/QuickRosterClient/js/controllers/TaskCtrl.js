'use strict';

var app = angular.module('inspinia');

app.controller('TaskCtrl', ['$scope', 'modalSvc', 'taskSvc', function ($scope, modalSvc, taskSvc) {

    $scope.message = 'message for task';
    $scope.taskList = taskSvc.getModel();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.templateUrl = '/views/management/taskDetail.html';
    $scope.controllerName = 'TaskDetailCtrl';

    $scope.openTaskDetails = function (task) {

        var clone = JSON.parse(JSON.stringify(task));
        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, task, null);

    };

    $scope.onSaveCallFromModal = function (taskMofified) {

        //Post the modified object to server. 
        if (taskMofified.TaskId == -1) {
            //new task
            taskSvc.addTask(taskMofified);
        } else {
            //modify exsiting
            taskSvc.updateTask(taskMofified);
        }


    };

    $scope.onCancelCallFromModal = function () {
        // do nothing. 
    };


    $scope.addNew = function () {
        var newTask = { TaskId: -1 };

        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newTask, null, null);
    };

    $scope.deleteTask = function (task) {
        if (task && task.TaskId > 0) {
            taskSvc.deleteTask(task.TaskId);
        }

    };


}]);

