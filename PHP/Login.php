<?php

include("Connection.php");

// GET VALUES FROM THE USER INPUT
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($username) || empty($password)) {
    echo "Username and Password Cannot be empty";
} else {

    // CONNECT TO MYSQL
    try {
        $conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);
    } catch (Exception $e) {
        echo "Connection Failed" . $e->getMessage();
        exit(); // Exit if connection fails
    }
}

if ($conn) {
    $username_check = "SELECT username, user_password FROM user_credentials WHERE username = '$username' ";
    $result = mysqli_query($conn, $username_check);

    if ($result) {
        $row = mysqli_fetch_array($result);

        // GET ROWS
        if ($row) {
            $hashedPassword = $row['user_password'];

            // Verify the entered password with the stored hashed password
            if (password_verify($password, $hashedPassword)) {
                echo password_verify($password, $hashedPassword);
                echo "Login Successful";
            } else {
                echo "Incorrect Password";
            }
        }

        // IF THERE ARE NO ROWS RETURNED
        else {
            echo "Username is not found";
        }
    } else {
        echo "Error: " . $username_check . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
