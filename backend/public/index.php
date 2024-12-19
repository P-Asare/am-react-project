<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS');
header("Content-Type: application/json; charset=utf-8");
header('Access-Control-Allow-Credentials: true');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

require '../src/routes.php';

// Handle the request
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Extract request uri
$basePath = '/annmarie/backend/public/';
if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
}

// Call the appropriate route handler
handleRequest($method, $uri);

?>