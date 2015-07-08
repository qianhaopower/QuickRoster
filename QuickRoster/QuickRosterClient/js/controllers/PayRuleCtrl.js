'use strict';

var app = angular.module('inspinia');

app.controller('PayRuleCtrl', ['$scope', 'modalSvc', 'payRuleSvc', function ($scope, modalSvc, payRuleSvc) {

    $scope.message = 'message for payRule';
    $scope.payRuleList = payRuleSvc.getModel();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.templateUrl = '/views/management/payRuleDetail.html';
    $scope.controllerName = 'PayRuleDetailCtrl';

    $scope.openPayRuleDetails = function (payRule) {

        var clone = JSON.parse(JSON.stringify(payRule));
        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, clone, payRule, null);

    };

    $scope.onSaveCallFromModal = function (payRuleMofified) {

        //Post the modified object to server. 
        if (payRuleMofified.PayRuleId == -1) {
            //new payRule
            payRuleSvc.addPayRule(payRuleMofified);
        } else {
            //modify exsiting
            payRuleSvc.updatePayRule(payRuleMofified);
        }


    };

    $scope.onCancelCallFromModal = function () {
        // do nothing. 
    };


    $scope.addNew = function () {
        var newPayRule = { PayRuleId: -1 };

        modalSvc.openModal($scope.onSaveCallFromModal, $scope.onCancelCallFromModal, $scope.templateUrl, $scope.controllerName, newPayRule, null, null);
    };

    $scope.deletePayRule = function (payRule) {
        if (payRule && payRule.PayRuleId > 0) {
            payRuleSvc.deletePayRule(payRule.PayRuleId);
        }

    };


}]);

