'use strict';

var app = angular.module('inspinia');

app.controller('TeamCtrl', ['$scope', 'modalSvc', 'teamSvc', function ($scope, modalSvc, teamSvc) {

    $scope.message = 'message for team';
    $scope.teamList = teamSvc.getModel();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.templateUrl = '/views/management/teamDetail.html';
    $scope.controllerName = 'TeamDetailCtrl';

    $scope.openTeamDetails = function (team) {

        var clone = JSON.parse(JSON.stringify(team));
        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, team, null,'lg');

    };

    $scope.onSaveCallFromModal = function (teamMofified) {

        //Post the modified object to server. 
        if (teamMofified.TeamId == -1) {
            //new team
            teamSvc.addTeam(teamMofified);
        } else {
            //modify exsiting
            teamSvc.updateTeam(teamMofified);
        }


    };

    $scope.onCancelCallFromModal = function () {
        // do nothing. 
    };


    $scope.addNew = function () {
        var newTeam = { TeamId: -1 };

        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newTeam, null, null, 'lg');
    };

    $scope.deleteTeam = function (team) {
        if (team && team.TeamId > 0) {
            teamSvc.deleteTeam(team.TeamId);
        }

    };


}]);
