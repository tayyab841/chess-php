<?php
// Initialize the session
session_start();
 
// // Check if the user is logged in, if not then redirect him to login page
// if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
//     header("location: login.php");
//     exit;
// }

$loggedIn = (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true);

if ($loggedIn) {
    echo "Logged In User : ".$_SESSION["username"]." <a href=logout.php>Logout</a>";
} else {
    echo "<a href=login.php>LogIn</a>";
}

if ($loggedIn) {
    require_once "config.php";

    $query = mysqli_query($mysqli, "SELECT id,username FROM Users WHERE id <> ".$_SESSION["id"]);
    $users = mysqli_fetch_all($query);

    if ($users) {
        echo '  <table>
                  <tr>
                    <th>User Name</th>
                  </tr>';
        foreach ($users as $user) {
            $id =   $user[0];
            $name = $user[1];

            echo '<tr>
                    <td><font size="2" face="Lucida Sans Unicode"><a href=game.php/?player='.$_SESSION["id"].'&opponent='.$id.'>'.$name.'</a></td>
                </tr>';
        }
        echo '</table>';
    }
}
?>