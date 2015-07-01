/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/dashboard/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        //index
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })

       //dashboard
         .state('dashboard', {
             abstract: true,
             url: "/dashboard",
             templateUrl: "views/common/content.html",
         })
        .state('dashboard.main', {
            url: "/main",
            templateUrl: "views/dashboard.html",
            data: { pageTitle: 'Dashboard' },
            controller: 'DashboardCtrl'
        })


        //mail box
     .state('mailbox', {
         abstract: true,
         url: "/mailbox",
         templateUrl: "views/common/content.html",
     })
        .state('mailbox.inbox', {
            url: "/inbox",
            templateUrl: "views/mail/mailbox.html",
            data: { pageTitle: 'Mail Inbox' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            },
            controller: 'InboxCtrl'
        })

        //reports
    .state('reports', {
        abstract: true,
        url: "/report",
        templateUrl: "views/common/content.html",
    })
        .state('reports.shiftReport', {
            url: "/shiftReport",
            templateUrl: "views/reports/shif_report.html",
            data: { pageTitle: 'Shift Report' },
            controller: 'ShiftReportCtrl'
        })

           //management
    .state('management', {
        abstract: true,
        url: "/management",
        templateUrl: "views/common/content.html",
    })
        .state('management.personnel', {
            url: "/personnel",
            templateUrl: "views/management/personnel.html",
            data: { pageTitle: 'Personnnel' },
            controller: 'PersonnelCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datepicker/angular-datapicker.css', 'js/plugins/datepicker/angular-datepicker.js']
                        },
                    ]);
                }
            }
        })
        .state('management.task', {
            url: "/task",
            templateUrl: "views/management/task.html",
            data: { pageTitle: 'Task' },
            controller: 'TaskCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css', 'js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                    ]);
                }
            }
        })
        .state('management.team', {
            url: "/team",
            templateUrl: "views/management/team.html",
            data: { pageTitle: 'Team' },
            controller: 'TeamCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css', 'js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                    ]);
                }
            }
        })
        .state('management.shifts', {
            url: "/shifts",
            templateUrl: "views/management/shift.html",
            data: { pageTitle: 'Shift' },
            controller: 'ShiftCtrl'
        })
        .state('management.unavailability', {
            url: "/unavailability",
            templateUrl: "views/management/unavailability.html",
            data: { pageTitle: 'Unavailability' },
            controller: 'UnavailabilityCtrl'
        })
        .state('management.equipment', {
            url: "/equipment",
            templateUrl: "views/management/equipment.html",
            data: { pageTitle: 'Equipment' },
            controller: 'EquipmentCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css', 'js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                    ]);
                }
            }
        })
        .state('management.location', {
            url: "/location",
            templateUrl: "views/management/location.html",
            data: { pageTitle: 'Location' },
            controller: 'LocationCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css', 'js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                    ]);
                }
            }
        })
        .state('management.user', {
            url: "/user",
            templateUrl: "views/management/user.html",
            data: { pageTitle: 'User' },
            controller: 'UserCtrl'
        })
        .state('management.payRate', {
            url: "/payRate",
            templateUrl: "views/management/payRule.html",
            data: { pageTitle: 'Pay Rates' },
            controller: 'PayRuleCtrl',
        })


        //costs
    .state('costs', {
        abstract: true,
        url: "/cost",
        templateUrl: "views/common/content.html",
    })
        .state('costs.shiftCost', {
            url: "/shiftCost",
            templateUrl: "views/costs/shift_cost.html",
            data: { pageTitle: 'Shift Cost' },
            controller: 'CostReportCtrl'
        })

        //settings
      .state('settings', {
          abstract: true,
          url: "/setting",
          templateUrl: "views/common/content.html",
      })
        .state('settings.systemSetting', {
            url: "/systemSetting",
            templateUrl: "views/settings/system_setting.html",
            data: { pageTitle: 'System Settings' },
            controller: 'SystemSettingCtrl'
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
