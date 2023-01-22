<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include("db-tilkobling.php");

$mail = $_POST['mail'];
$brukernavn = $_POST['brukernavn'];
$passord = md5($_POST['passord']);

if (!$mail || !$brukernavn || !$passord) {
	echo "Du må fylle ut mail, brukernavn og passord";
}
else {
	$sqlSetning = "INSERT INTO brukere (mail, brukernavn, passord) VALUES('$mail', '$brukernavn', '$passord');";
	mysqli_query($db, $sqlSetning) or die ("Ikke mulig å registrere i databasen");

    echo "Du har registrert deg med brukernavnet: $brukernavn";
}
?>