'use strict'

var AppCtrl = function($scope,$state,$ionicModal,$location, $timeout,cordovafactory){
          // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login-modal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
          $scope.modal.hide();
        },

        // Open the login modal
        $scope.login = function() {
          $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
          console.log('Doing login', $scope.loginData);

          // Simulate a login delay. Remove this and replace with your login
          // code if using a login system
          $timeout(function() {
            $scope.closeLogin();
          }, 1000);
        };

        $scope.authenticate = function(){
          cordovafactory.userAuthentication($scope.loginData,function(data){
            console.log(data);
            if(data > 0){
              $state.go('app.playlists');
            }
          })
        }
};

var PlaylistCtrl = function($scope, $stateParams,cordovafactory){
    cordovafactory.getCustomer(function(data){
      $scope.playlists = data;
      console.log($scope.playlists);
    });
}

cordovaApp.Controllers.controller(AppCtrl,['$scope','$state', '$ionicModal','$location', '$timeout','cordovafactory',AppCtrl]);
cordovaApp.Controllers.controller(PlaylistCtrl,['$scope', '$stateParams','cordovafactory', PlaylistCtrl]);