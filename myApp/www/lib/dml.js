	function insertAccount (exe){
		exe.executeSql('INSERT INTO account(acc_username,acc_password) VALUES("admin","admin")');
	    exe.executeSql('INSERT INTO account(acc_username,acc_password) VALUES("guest","guest")');
	    
	}

	function insertCustomer (exe){
		exe.executeSql('INSERT INTO customer(cus_fullname,cus_gender,cus_address) VALUES("Neil Ragadio","Male","Naawan")');
	    exe.executeSql('INSERT INTO customer(cus_fullname,cus_gender,cus_address) VALUES("Jhon James","Male","Naawan")');
	    exe.executeSql('INSERT INTO customer(cus_fullname,cus_gender,cus_address) VALUES("Jean Yo","Female","Naawan")');
	}