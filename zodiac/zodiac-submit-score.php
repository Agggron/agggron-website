<?php 
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Accept, X-Access-Token, X-Application-Name, X-Request-Sent-Time");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Origin: *");
?>
<html>
 	<head>
  		<title>Zodiac Submit Score PHP</title>
 	</head>
 	<body>

 		<?php echo '<p>Hello World</p>'; ?> 
		
		<br>

		<?php 
			print "Score submitted: " . $_POST["score"]; 
			print "Player name submitted: " . $_POST["playerName"]; 
			
			$score = $_POST["score"];
			$name = $_POST["playerName"];
			$time = $_POST["time"];
		
			$db = new mysqli('192.185.4.154', 'agggron_admin', 'mysql', 'agggron_website', '3306');

			if($db->connect_errno > 0){
			    die('Unable to connect to database [' . $db->connect_error . ']');
			}
		
			$sql = "INSERT INTO scores (score, name, time) VALUES ($score, '$name', '$time')";

			if (!$result = $db->query($sql)) {
			    // Oh no! The query failed. 
			    echo "Sorry, the website is experiencing problems.";

			    // Again, do not do this on a public site, but we'll show you how
			    // to get the error information
			    echo "Error: Our query failed to execute and here is why: \n";
			    echo "Query: " . $sql . "\n";
			    echo "Errno: " . $db->errno . "\n";
			    echo "Error: " . $db->error . "\n";
			    exit;
			}
			$db->close();
		?>

	</body>
</html>