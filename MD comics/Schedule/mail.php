<?php
//get data from form  

$name = $_POST['fname'];
$email= $_POST['phone'];
$message= $_POST['call'];
$to = "mohandatta.j@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@mdcomicse.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>