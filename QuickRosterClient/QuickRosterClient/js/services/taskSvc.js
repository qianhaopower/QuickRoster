'use strict';
var app = angular.module('inspinia');
app.factory('taskSvc', ['$resource', '$q', function ($resource, $q) {
    // var resource = $resource('/api/Task/:section/:id', { section: '@section', id: '@id' });
    return {
        getModel: function () {
            //call get
            return getFakeTaskList();
        },

        deleteTask: function (taskID) {
            //call delete  
        },

        updateTask: function (task) {
            // call update
        },

        addTask: function (task) {
            // call add
        }

       
    };
}]);



function getFakeTaskList() {

    var list = [{
        "TaskId": 1,
        "TaskName": "Safety Technician I",
        "Rate": "9.02"
    }, {
        "TaskId": 2,
        "TaskName": "Account Executive",
        "Rate": "7.52"
    }, {
        "TaskId": 3,
        "TaskName": "Geologist III",
        "Description": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
        "Color": "#ce6a63",
        "Rate": "3.26"
    }, {
        "TaskId": 4,
        "TaskName": "Electrical Engineer",
        "Description": "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
        "Color": "#c95d32",
        "Rate": "5.81"
    }, {
        "TaskId": 5,
        "TaskName": "Internal Auditor",
        "Description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
        "Color": "#cccc93",
        "Rate": "4.14"
    }, {
        "TaskId": 6,
        "TaskName": "Software Consultant",
        "Description": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",
        "Color": "#83cdf8",
        "Rate": "7.12"
    }, {
        "TaskId": 7,
        "TaskName": "Executive Secretary",
        "Description": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
        "Color": "#02951a",
        "Rate": "4.14"
    }, {
        "TaskId": 8,
        "TaskName": "Structural Engineer",
        "Description": "nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede",
        "Color": "#47e85f",
        "Rate": "3.67"
    }, {
        "TaskId": 9,
        "TaskName": "Financial Advisor",
        "Description": "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
        "Color": "#9d37b4",
        "Rate": "8.84"
    }, {
        "TaskId": 10,
        "TaskName": "Chemical Engineer",
        "Description": "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
        "Color": "#85cc96",
        "Rate": "6.28"
    }, {
        "TaskId": 11,
        "TaskName": "Senior Financial Analyst",
        "Description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
        "Color": "#2aac9e",
        "Rate": "3.9"
    }, {
        "TaskId": 12,
        "TaskName": "Project Manager",
        "Rate": "2.79"
    }, {
        "TaskId": 13,
        "TaskName": "Associate Professor",
        "Description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
        "Color": "#ae3a8c",
        "Rate": "4.99"
    }, {
        "TaskId": 14,
        "TaskName": "Engineer II",
        "Description": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
        "Color": "#ef7663",
        "Rate": "8.6"
    }, {
        "TaskId": 15,
        "TaskName": "Statistician I",
        "Description": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
        "Color": "#1d1086",
        "Rate": "9.95"
    }, {
        "TaskId": 16,
        "TaskName": "Statistician IV",
        "Description": "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
        "Color": "#4e917f",
        "Rate": "6.92"
    }, {
        "TaskId": 17,
        "TaskName": "Junior Executive",
        "Description": "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
        "Color": "#f28615",
        "Rate": "7.68"
    }, {
        "TaskId": 18,
        "TaskName": "Statistician IV",
        "Description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
        "Color": "#585eaf",
        "Rate": "7.11"
    }, {
        "TaskId": 19,
        "TaskName": "Accountant I",
        "Description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
        "Color": "#0d7a38",
        "Rate": "4.39"
    }, {
        "TaskId": 20,
        "TaskName": "Payment Adjustment Coordinator",
        "Description": "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
        "Color": "#a60c14",
        "Rate": "3.52"
    }];
    return list;

}
