'use strict';

var app = angular.module('inspinia');

app.controller('EquipmentCtrl', ['$scope', 'modalSvc', 'equipmentSvc', function ($scope, modalSvc, equipmentSvc) {

    $scope.message = 'message for equipment';
    $scope.equipmentList = equipmentSvc.getModel();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.templateUrl = '/views/management/equipmentDetail.html';
    $scope.controllerName = 'EquipmentDetailCtrl';

    $scope.openEquipmentDetails = function (equipment) {

        var clone = JSON.parse(JSON.stringify(equipment));
        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, equipment, null);

    };

    $scope.onSaveCallFromModal = function (equipmentMofified) {

        //Post the modified object to server. 
        if (equipmentMofified.EquipmentId == -1) {
            //new equipment
            equipmentSvc.addEquipment(equipmentMofified);
        } else {
            //modify exsiting
            equipmentSvc.updateEquipment(equipmentMofified);
        }


    };

    $scope.onCancelCallFromModal = function () {
        // do nothing. 
    };


    $scope.addNew = function () {
        var newEquipment = { EquipmentId: -1 };

        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newEquipment, null, null);
    };

    $scope.deleteEquipment = function (equipment) {
        if (equipment && equipment.EquipmentId > 0) {
            equipmentSvc.deleteEquipment(equipment.EquipmentId);
        }

    };


}]);

