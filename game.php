<?php
    session_start();

    // require_once("rules.js");

    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);

    $player1 = $queries['player'];
    $player2 = $queries['opponent'];

    $signedInUser = $_SESSION['id'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game</title>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <!-- <script type="text/javascript" src="/rules.js"></script> -->
    <style>
        table {
            border: 1px solid black;
            border-spacing: 0px;
        }
        td {
            padding: 20px;
            border: 1px solid black;
        }
        .bgcolor {
            background: silver;
        }
        .highlighted {
            background: gray;
        }
    </style>
</head>
<script type="text/javascript">
    <?php require_once("rules.js");?>
    initial_position = "";
    game_id = 0;

    var signedInUser = "<?php echo $signedInUser; ?>";
    var player_white = "";
    var player_black = "";
    var turn_user = "";

    function getBoard(player1, player2) {
        $.ajax({
                type: "GET",
                url: "/makeBoard.php",
                data: {"player1": <?php echo $player1; ?>, "player2": <?php echo $player2; ?>},
                success: function(response) {
                    response     = JSON.parse(response);
                    game_id      = response.game_id;
                    player_white = response.player_white;
                    player_black = response.player_black;
                    turn_user    = response.turn_user;

                    arrangement  = response.game_status;
                    arrangement  = JSON.parse(arrangement);
                    Object.keys(arrangement).forEach(key => {
                        document.getElementById(key).innerHTML = decodeURI(arrangement[key]);
                    });
                    document.getElementById("turn_user").innerHTML = "Turn : " + (turn_user == player_white ? "White" : "Black");
                }
            });
    }

    function readBoard() {
        all_tds = $("td");
        game_status = {};
        for (var i = 0; i < all_tds.length; i++) {
            key = all_tds[i].id;
            value = document.getElementById(all_tds[i].id).innerHTML;
            
            game_status[[key]] = encodeURI(value);
        }
        $.ajax({
                type: "POST",
                url: "/saveBoard.php",
                data: {"game_id": game_id, "game_status": game_status, "turn_user": turn_user},
                success: function(response) {
                    console.log(response);
                }
            });
    }

    function highlight(element) {
        if (turn_user != signedInUser) {
            return;
        }
        $(".highlighted").removeClass("highlighted");
        piece = element.innerHTML;
        position = element.id;

        initial_position = position;

        if (signedInUser == player_white) {
            ids = highlightsForWhite(piece, position);
        } else if (signedInUser == player_black) {
            ids = highlightsForBlack(piece, position);
        }
        console.log("from:",position);
        console.log("to:",ids);
        ids.forEach(id => {
            if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;") {
                $("#"+id).addClass("highlighted");
                $("#"+id).attr("onclick","move(this)");
            }
        });
    }

    function move(element) {
        clickedClass = element.className;
        if (clickedClass.includes("highlighted")) {
            document.getElementById(element.id).innerHTML = document.getElementById(initial_position).innerHTML;
            document.getElementById(initial_position).innerHTML = "&nbsp;";
        }
        $(".highlighted").removeClass("highlighted");
        $("#"+element.id).attr("onclick","highlight(this)");
        turn_user = turn_user == player_white ? player_black : player_white;
        readBoard();
    }

    (function updateBoard() {
        getBoard(<?php echo $player1 ?>, <?php echo $player2 ?>);
        setTimeout(updateBoard, 1000);
    })();
</script>
<body>
    <p id="turn_user"></p>
    <table>

        <?php
            require_once "config.php";

            for ($i=8; $i > 0 ; $i--) { 
                echo "<tr>";
                $j=1;
                foreach (['a','b','c','d','e','f','g','h'] as $val) {
                    $color = (($i + $j) % 2 == 0) ? 'class="bgcolor"' : '';
                    echo '<td style="font-size:50px;" onclick="highlight(this);" id="'.$val.$i.'"'.$color.'></td>';
                    $j++;
                }
                echo "</tr>";
            }

            echo "<script type='text/javascript'>getBoard('$player1', '$player2');</script>"
        ?>

    </table>

</body>
</html>