<!DOCTYPE html>

<html lang="en">

<?php $PAGE_TYPE = "projects"; ?>
<?php $PAGE_TITLE = "Projects: Zodiac"; ?>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1">
  <title>Aaron Tang - Home</title>
  <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
  <link rel="stylesheet" type="text/css" href="../app.css">
  <link rel="stylesheet" type="text/css" media="screen and (max-width: 1200px)" href="../medium.css">
  <link rel="stylesheet" type="text/css" media="screen and (max-width: 550px)" href="../small.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito|Open+Sans|Raleway&display=swap" rel="stylesheet"> 
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="../app.js"></script>
</head>

<body>
  <header>
    <div class="header_container">

      <a href="../">
      <div class="header_title">
        <div class="header_title_image">
          <img src="../header_logo.png">
        </div>
        <div class="header_title_text">
          AARON TANG
        </div>
      </div>
      </a>

      <div class="header_navigation">
        <a href="zodiac.php">
        <div class="header_navigation_item">
          PLAY ZODIAC
        </div>
        </a>

        <a href="javascript:;">
        <div class="header_navigation_item">
          HIGH SCORES
        </div>
        </a>
      </div>
    </div>

  </header>

	<div id="content-projects">
        <div style="min-height: 75px">-</div>
		<div class="content-title">-HIGH SCORES: ZODIAC-</div>

		<div><hr></hr></div>
	
		<?php 
            $db = new mysqli('192.185.4.154', 'agggron_admin', 'mysql', 'agggron_website', '3306');
            if($db->connect_errno > 0){
                die('Unable to connect to database [' . $db->connect_error . ']');
            }
        
            $sql = "SELECT score, name, time FROM scores ORDER BY score DESC LIMIT 20";

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

            if ($result->num_rows > 0) {
                $row_number = 0;
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    $row_number += 1;
                    echo "Rank: " . $row_number . " - Score: " . $row["score"] . " - Name: " . $row["name"] . " - Time: " . $row["time"] . "<br>";
                }
            } else {
                echo "0 results";
            }

            $result->free();
            $db->close();
        ?>
    </div>

    <footer style="margin-top: 20px">
    <div class="footer_text">
      © 2017-2019 | Website by Aaron Tang 
    </div>
  </footer>

</body>

</html>