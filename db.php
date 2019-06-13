<?php
try {
    $db = new PDO();
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec('SET NAMES "utf8"');
} catch (PDOException $e) {
    $error = 'Unable to connect to the database server.';
    include 'error.html.php';
    exit();
}