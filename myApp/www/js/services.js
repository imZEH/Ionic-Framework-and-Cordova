'use strict';

var cordovafactory = function(){
	var cordovafactory  = {};

	cordovafactory.userAuthentication = function(data,callback){
		getuser(data,function(data){
			callback(data);
		});
	}

	cordovafactory.getCustomer = function (callback){
		getcustomer(function(data){
			callback(data);
		});
	}

	return cordovafactory;
}

cordovaApp.Services.factory('cordovafactory',[cordovafactory]);

