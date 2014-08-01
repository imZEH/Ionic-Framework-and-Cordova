
//create database
    
    var con = getConnection();

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS account');
        tx.executeSql('DROP TABLE IF EXISTS customer');
        tx.executeSql('CREATE TABLE IF NOT EXISTS customer (cus_id INT PRIMARY KEY,cus_fullname char(25) Not Null,cus_gender char(15) Not Null, cus_address char(25) Not Null);');
        tx.executeSql('CREATE TABLE IF NOT EXISTS account (acc_id INT PRIMARY KEY,acc_username CHAR(25) Not Null,acc_password CHAR(25) Not Null);'); 
    }

    // Cordova is ready
    function onDeviceReady() {
        console.log('onDeviceReady');
        con.transaction(populateDB, errorCB);
        con.transaction(insertAccount,errorCB);
        con.transaction(insertCustomer,errorCB);
    }

