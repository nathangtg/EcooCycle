<?php 

header('Access-Control-Allow-Origin: *');
    
$db_server = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'ecommerce';

if($conn = mysqli_connect($db_server, $db_username, $db_password, $db_name)){   
    print("Connected");
    return true;
}
else {
    print("Not Connected");
}

?>