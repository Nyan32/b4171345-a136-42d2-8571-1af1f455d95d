<?php

include ('connect.php');
header('Content-Type: application/json');

$query = "SELECT * FROM employee";
$stmt = $mysqli->prepare($query);
$stmt->execute();
$result = $stmt->get_result();

echo (json_encode($result->fetch_all(MYSQLI_ASSOC)));

$stmt->close();
$mysqli->close();