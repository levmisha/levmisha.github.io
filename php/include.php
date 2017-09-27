<?php
$db = mysqli_connect("localhost", "root", "");
mysqli_select_db("mysite",$db);
$result = mysqli_query("SELECT * FROM menu", $db);
$myrow = mysqli_fetch_array($result);
?>
