<?php
	require_once "config.php";

    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    $player1 = $queries['player1'];
    $player2 = $queries['player2'];

    $query = mysqli_query($mysqli, "SELECT id, game_status, player_white, player_black, turn_user FROM games WHERE player_white IN (".$player1.",".$player2.") AND player_black IN (".$player1.",".$player2.")");
    $game = mysqli_fetch_all($query);

    if ($game) {
    	echo json_encode(array(
                "game_id"      => $game[0][0],
                "game_status"  => $game[0][1],
                "player_white" => $game[0][2],
                "player_black" => $game[0][3],
                "turn_user"    => $game[0][4]
            )
        );
    } else {
    	$initialBoard = [
                "a1" => "&#9814;",
                "b1" => "&#9816;",
                "c1" => "&#9815;",
                "d1" => "&#9813;",
                "e1" => "&#9812;",
                "f1" => "&#9815;",
                "g1" => "&#9816;",
                "h1" => "&#9814;",
                "a2" => "&#9817;",
                "b2" => "&#9817;",
                "c2" => "&#9817;",
                "d2" => "&#9817;",
                "e2" => "&#9817;",
                "f2" => "&#9817;",
                "g2" => "&#9817;",
                "h2" => "&#9817;",
                "a8" => "&#9820;",
                "b8" => "&#9822;",
                "c8" => "&#9821;",
                "d8" => "&#9819;",
                "e8" => "&#9818;",
                "f8" => "&#9821;",
                "g8" => "&#9822;",
                "h8" => "&#9820;",
                "a7" => "&#9823;",
                "b7" => "&#9823;",
                "c7" => "&#9823;",
                "d7" => "&#9823;",
                "e7" => "&#9823;",
                "f7" => "&#9823;",
                "g7" => "&#9823;",
                "h7" => "&#9823;",
            ];
        foreach (['a','b','c','d','e','f','g','h'] as $key) {
            for ($i=1; $i <= 8; $i++) { 
                if (!isset($initialBoard[$key.$i])) {
                    $initialBoard[$key.$i] = "&nbsp;";
                }
            }
        }

        $sql = "INSERT INTO games (player_white, player_black, game_status, turn_user) VALUES (?, ?, ?, ?)";

        $js_array = json_encode($initialBoard);
	    if($stmt = mysqli_prepare($mysqli, $sql)){
	        mysqli_stmt_bind_param($stmt, "iisi", $player1, $player2, $js_array, $player1);
	        if(mysqli_stmt_execute($stmt)){
                $query = mysqli_query($mysqli, "SELECT id, game_status, player_white, player_black,turn_user FROM games WHERE player_white IN (".$player1.",".$player2.") AND player_black IN (".$player1.",".$player2.")");
    			$game = mysqli_fetch_all($query);
    			echo json_encode(array(
                        "game_id"      => $game[0][0],
                        "game_status"  => $game[0][1],
                        "player_white" => $game[0][2],
                        "player_black" => $game[0][3],
                        "turn_user"    => $game[0][4]
                    )
                );
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
	    }
    }

?>