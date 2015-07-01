'use strict';
var app = angular.module('inspinia');
app.factory('equipmentSvc', ['$resource', '$q', function ($resource, $q) {
    // var resource = $resource('/api/Equipment/:section/:id', { section: '@section', id: '@id' });
    return {
        getModel: function () {
            //call get
            return getFakeEquipmentList();
        },

        deleteEquipment: function (equipmentID) {
            //call delete  
        },

        updateEquipment: function (equipment) {
            // call update
        },

        addEquipment: function (equipment) {
            // call add
        }

       
    };
}]);



function getFakeEquipmentList() {

    var list = [{
        "EquipmentId": 1,
        "EquipmentName": "Computer",
        "Description": "A device for compute"
        
    }];
    return list;

}
