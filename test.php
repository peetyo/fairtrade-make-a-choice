<?php
//include connection script
include("db.php");
$res = $db->query("SELECT * FROM input");
$stuff = $res->fetchAll(PDO::FETCH_OBJ);
echo json_encode($stuff);