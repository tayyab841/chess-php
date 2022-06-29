<?php

	require_once "config.php";

    $queries = array();
    $game_id =  $_POST['game_id'];
    $turn_user =  $_POST['turn_user'];
    $game_status =  json_encode($_POST['game_status']);

    $sql = "UPDATE games SET game_status = '".$game_status."' , turn_user = ".$turn_user." WHERE id = ".$game_id;

	if ($mysqli->query($sql) === TRUE) {
		echo "Game Saved!";
	} else {
		echo "Error updating record: " . $conn->error;
	}

?>