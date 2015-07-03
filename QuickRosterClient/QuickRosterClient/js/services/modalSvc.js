"use strict";

var app = angular.module('inspinia');

app.factory('modalSvc', ['$modal', function ($modal) {


    return {
        openModal: function(onSaveSuccess, onCancel, templateUrl, controllerName, clonedObject,originalItem, parameter,size) {

            var modalInstance = {};
    
            modalInstance = $modal.open({
                templateUrl: templateUrl,
                controller: controllerName,
                size:size,
                resolve: {
                    itemToEdit: function () {
                        return clonedObject;
                    },
                    originalItem: function () {
                        return originalItem;
                    },
                    parameter: function () {
                        return parameter;
                    }

                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    onSaveSuccess(result, originalItem);
                } else {
                    onCancel(originalItem);
                }
               //$log.info(templateUrl + ' Modal dismissed at: ' + new Date());
            });
        },
}


}]);