<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ambisius_test";

date_default_timezone_set('Asia/Jakarta');

// Create connection
$mysqli = new mysqli($servername, $username, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
