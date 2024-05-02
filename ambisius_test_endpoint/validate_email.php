<?php

include ('connect.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if (isset($_POST['email'])) {
    $email = trim($_POST['email']);

    $query = "SELECT COUNT(*) AS hitungEmployee FROM employee WHERE email=?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    $jumlah = $result->fetch_assoc()['hitungEmployee'];

    echo json_encode(array('jumlah' => $jumlah));

    $stmt->close();
    $mysqli->close();
} else {
    echo json_encode(array('error' => 'Email parameter is missing'));
}


