'use strict';

var app = angular.module('inspinia');

app.controller('PersonnelCtrl', ['$scope', 'modalSvc', 'personnelSvc', function ($scope, modalSvc, personnelSvc) {

     $scope.message = 'message for Personnel';
     $scope.personnelList = personnelSvc.getModel();
     $scope.currentPage = 1;
     $scope.pageSize = 10;
     $scope.templateUrl = '/views/management/personnelDetail.html';
     $scope.controllerName = 'PersonnelDetailCtrl';

     $scope.openPersonnelDetails = function (personnel) {

         var clone = JSON.parse(JSON.stringify(personnel));
      

         modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, personnel, null);

     };

     $scope.onSaveCallFromModal = function (personnelMofified) {

         //Post the modified object to server. 
         if (personnelMofified.ID == -1) {
             //new personnel
             personnelSvc.addPersonnel(personnelMofified);
         } else {
             //modify exsiting
             personnelSvc.updatePersonnel(personnelMofified);
         }
         

     };

     $scope.onCancelCallFromModal = function () {
         // do nothing. 
     };


     $scope.addNew = function () {
         var newPersonnel = {ID:-1, Gender:'Male'};

         modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newPersonnel, null, null);
     };

     $scope.deletePersonnel = function (personnel) {
         if (personnel && personnel.ID > 0) {
             personnelSvc.deletePersonnel(personnel.ID);
         }
         
    };


}]);

