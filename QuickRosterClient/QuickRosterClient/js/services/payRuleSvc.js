'use strict';
var app = angular.module('inspinia');
app.factory('payRuleSvc', ['$resource', '$q', function ($resource, $q) {
    // var resource = $resource('/api/PayRule/:section/:id', { section: '@section', id: '@id' });
    return {
        getModel: function () {
            //call get
            return getFakePayRuleList();
        },

        deletePayRule: function (payRuleID) {
            //call delete  
        },

        updatePayRule: function (payRule) {
            // call update
        },

        addPayRule: function (payRule) {
            // call add
        }

       
    };
}]);



function getFakePayRuleList() {

    var list = [{
        "PayRuleId": 1,
        "PayRuleName": "Base Rule",
        "Description": "A generic rule"
    }];
    return list;

}
