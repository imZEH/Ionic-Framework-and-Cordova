'use strict'

var cordovaApp = cordovaApp || {};

cordovaApp.Controllers = angular.module('cordova.controllers',[]);
cordovaApp.Services = angular.module('cordova.services',[]);

angular.module('cordova', ['ionic','cordova.controllers','cordova.services'])
      .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });

      document.addEventListener("deviceready", onDeviceReady, false);
    })

    .config(function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/menu.html",
          controller: 'AppCtrl'
        })

        .state('app.search', {
          url: "/search",
          views: {
            'menuContent' :{
              templateUrl: "templates/search.html"
            }
          }
        })

        .state('app.browse', {
          url: "/browse",
          views: {
            'menuContent' :{
              templateUrl: "templates/browse.html"
            }
          }
        })
        .state('app.playlists', {
          url: "/playlists",
          views: {
            'menuContent' :{
              templateUrl: "templates/playlists.html",
              controller: 'PlaylistCtrl'
            }
          }
        })

        .state('app.single', {
          url: "/playlists/:playlistId",
          views: {
            'menuContent' :{
              templateUrl: "templates/playlist.html",
              controller: 'PlaylistCtrl'
            }
          }
        })

        .state('app.loginFORM', {
          url: "/login",
          views: {
            'menuContent' :{
              templateUrl: "templates/login.html",
              controller: 'AppCtrl'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/login');
    });
