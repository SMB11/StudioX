<?php
 $name = $_POST['Name'];
 $visitor_email = $_POST['Email'];
 $message = $_POST['description'];

  	$email_from = 'sgardilyan@gmail.com';
  	$email_subject = "New form submission";
  	$email_body = "User Name: $name. \n".
  					"User Email: $visitor_email.\n".
  						"User Message: $message.\n";

  	$to = "smbat_gardilyan@edu.aua.am";
  	$headers = "From: $email_from \r \n";
  	$headers .= "Reply to: $visitor_email \r \n";

  	mail($to, $email_subject, $email_body, $headers);
  	echo "Thank you";
  	// header("Location: index.html");
  	echo "Thank you";

?>