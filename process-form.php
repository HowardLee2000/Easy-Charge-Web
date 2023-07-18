/*
if (isset($_POST['submit'])) {
$name = $_POST['name'];
$number = $_POST['contact'];
$email = $_POST['email'];
$message = $_POST['description'];
$merchant = $_POST['merchant_type'];

$to = "howardleecs@hotmail.com"; // Replace with your own email address
$subject = "New Message from form submission from Easy Charge Website";
$body = "Name: $name\nContact Number: $number\nEmail: $email\nMerchant Type: $merchant\nMessage: $message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
echo "Thank you for your message!";
} else {
echo "There was a problem sending your message. Please try again later.";
}
}
*/
<?php
echo "hello world!";
$name = $_POST['name'];
echo $name;
?>