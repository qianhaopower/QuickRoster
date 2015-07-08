'use strict';

var app = angular.module('inspinia');

app.controller('TeamDetailCtrl', ['$scope', '$modalInstance', 'itemToEdit', 'personnelSvc', function ($scope, $modalInstance, team, personnelSvc) {

    setupTeam();

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
            //save selected personnelIds to team
            data.PersonnelList = $scope.models.lists.personnelInTeam;

            $modalInstance.close(data);
        } else {
            //should not hit here. Save button should be disabled until valid
            // utils.setInvalidsDirty(form);
        }
    };


    $scope.getListName = function (originalName) {
        if (originalName == 'personnelInTeam')
            return 'Personnel in Team';
        if (originalName == 'personnelAvailable')
            return 'Personnel Available';

        return "Invalid team name";
    };



    $scope.deleteItem = function (item) {
        var index = $scope.models.lists.personnelAvailable.indexOf(item);
        if (index != -1) {
            $scope.models.lists.personnelAvailable.splice(index, 1);
        }

        var indexInteam = $scope.models.lists.personnelInTeam.indexOf(item);
        if (indexInteam != -1) {
            $scope.models.lists.personnelInTeam.splice(indexInteam, 1);
        }
        $scope.teamInfoForm.$setDirty();
    }

    $scope.setForm = function (form) {
        $scope.teamInfoForm = form;
    };


    //private functions
    function setupTeam() {

        $scope.message = 'message for team detail Modal View';

        $scope.team = team;

        $scope.models = {
            selected: null,
            lists: { "personnelInTeam": [], "personnelAvailable": [] }
        };

        // insert personnel into team
        if (team.PersonnelList) {
            for (var i = 0; i < team.PersonnelList; i++) {
                $scope.models.lists.personnelInTeam.push({ ID: team.PersonnelList[i].PersonnelId, label: team.PersonnelList[i].PersonnelName });
            }
        } else {
            team.PersonnelList = [];
        }

        var allPersonnelList = personnelSvc.getModel();

        var personnelAvailable = [];

        for (var i = 0; i < allPersonnelList.length; i++) {
            var found = false;
            for (var j = 0; j < team.PersonnelList.length; j++) {
                if (team.PersonnelList[j].PersonnelId == allPersonnelList[i].ID)
                    found = true;
            }
            if (!found)
                personnelAvailable.push({ PersonnelId: allPersonnelList[i].ID, PersonnelName: allPersonnelList[i].FirstName + ' ' + allPersonnelList[i].LastName });
        }

        //insert other personnel into available list. 
        //sort those personnel by name;

        //function compare(a, b) {
        //    if (a.PersonnelName < b.PersonnelName)
        //        return -1;
        //    if (a.PersonnelName > b.PersonnelName)
        //        return 1;
        //    return 0;
        //}

        //personnelAvailable.sort(compare);
        for (var i = 0; i < personnelAvailable.length; i++) {
            $scope.models.lists.personnelAvailable.push({ ID: personnelAvailable[i].PersonnelId, label: personnelAvailable[i].PersonnelName });
        }

    };




}]);



