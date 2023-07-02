<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "anuragsingh2445@gmail.com"; // Replace with your email address
    $subject = "New message from your website";
    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type: text/plain; charset=UTF-8" . "\r\n";

    mail($to, $subject, $message, $headers);
}
?>
