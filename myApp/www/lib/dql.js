	function getuser(data,callback){
			var sqlquery = 'Select * from account where acc_username = ? and acc_password = ?';
			var len= 0;
			getConnection().transaction(function (exe){
					exe.executeSql(sqlquery,[data.username,data.password],function(exe,result){
						len =  result.rows.length;
						callback(len)
					},errorCB);
				});
		
		}

	function getcustomer(callback){
		var sqlquery = 'Select * from customer';
		getConnection().transaction(function (exe){
			exe.executeSql(sqlquery,[],function (exe,result){
				var len = result.rows.length;
				var data = [];
				for (var i=0; i<len; i++){
					 data.push({Row : i, FullName : result.rows.item(i).cus_fullname , Gender: result.rows.item(i).cus_gender});
				}
				callback(data);
			},errorCB);
		});
	}
