'use strict';
var app = angular.module('inspinia');
app.factory('teamSvc', ['$resource', '$q', function ($resource, $q) {
    // var resource = $resource('/api/Team/:section/:id', { section: '@section', id: '@id' });
    return {
        getModel: function () {
            //call get
            return getFakeTeamList();
        },

        deleteTeam: function (teamID) {
            //call delete  
        },

        updateTeam: function (team) {
            // call update
        },

        addTeam: function (team) {
            // call add
        }


    };
}]);



function getFakeTeamList() {

    var list = [{
        "TeamId": 1,
        "TeamName": "Food Checkers",
        "Color": "#c95d32",
        "Description": "A team for checking services",
        "PersonnelList": [
            { PersonnelId: 1, PersonnelName: "Ann Dina" },
            { PersonnelId: 2, PersonnelName: "Ben Dena" },
            { PersonnelId: 3, PersonnelName: "John Wu" },
        ]
    }];
    return list;

}
