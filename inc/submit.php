<?php
session_start();
//we should only do this if there is data in the post superarray

    
if(isset($_POST['priceguess'])){
    $guess = $_POST['priceguess'];
		$_SESSION["guess"] = $guess;
		$guessValue = $_SESSION["guess"];
 
    require_once('dbConnection.php');
    $sql = "INSERT INTO input (guess) VALUES('$guess')";
    
    $result = $dbConnection->query($sql);
    
}
?>