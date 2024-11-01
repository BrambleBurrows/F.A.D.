<?php
$servername = "localhost";
$username = "root";
$password = "g^&g1e2D25[pm6y<o?/T]7+5AI7bNN";
$dbname = "adminlogins";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Password FROM logins WHERE Name='Logan Hogue';";
$result = $conn->query($sql);


if ($result = "test") {
    $loginpass = true;
} else {
    $loginpass = false;
}


?>