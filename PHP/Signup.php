<?php

include('Connection.php');

// Get values from $_POST
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Check for null values
if (empty($username) || empty($password)) {
    echo 'Username and password cannot be null';
    exit();
} else {
    
    try {
        $conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);
    } catch (Exception $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }
    
    // If the connection is successful
    if ($conn) {
        // Check if username already exists
        $checkExistenceQuery = "SELECT username FROM user_credentials WHERE username = ?";
        $stmt = mysqli_prepare($conn, $checkExistenceQuery);
        mysqli_stmt_bind_param($stmt, "s", $username);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        if (mysqli_stmt_num_rows($stmt) > 0) {
            echo "Username already exists";
            exit();
        }

        // Sanitize inputs before using in the query to prevent SQL injection
        $username = mysqli_real_escape_string($conn, $username);
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Use prepared statements for inserting data
        $insertQuery = "INSERT INTO user_credentials (username, user_password) VALUES (?, ?)";
        $stmt = mysqli_prepare($conn, $insertQuery);
        mysqli_stmt_bind_param($stmt, "ss", $username, $hashedPassword);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_affected_rows($stmt) > 0) {
            echo 'Data inserted successfully';
        } else {
            echo 'Error: ' . mysqli_error($conn);
        }

        // Close the prepared statement
        mysqli_stmt_close($stmt);

        // Close the database connection
        mysqli_close($conn);
    }
}

// Make a reasonable message
echo "PHP";

?>
