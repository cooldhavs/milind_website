<?php
	//Set up connection creds
	$user = "root";
	$password = ""; //for pc
	//$password = "root"; //for mac
	$url = "localhost";
	$db = "db_movies";
	
	//Everything below does not need to be changed...
	$link = mysqli_connect($url, $user, $password, $db); //PC
	//$link = mysqli_connect($url, $user, $password, $db, "8889"); //MAC
	
	//Check Connection
	
	if(mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();	
	}
	
	
?>