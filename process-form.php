<?php

if (isset($_POST['submit'])) {

  // Get form input from POST
  $name = $_POST['name'];
  $number = $_POST['contact'];
  $email = $_POST['email'];
  $message = $_POST['description'];
  $merchant = $_POST['merchant_type'];
  $currentDate = date('Y-m-d');

  $conn = new mysqli('localhost', 'root', 'Arceuslugia2811!', 'easydatabase');

  // Check connection
  if (!$conn) {
    echo "Connection error: " . mysqli_connect_error();
  }

  // Create SQL query to insert data
  $sql = "INSERT INTO merchants (name, contact, email, type, description, date) VALUES ('$name', '$number', '$email', '$merchant', '$message','$currentDate')";

  // Execute the query
  if ($conn->query($sql) === TRUE) {
    echo "You have successfully submitted your form to Easy Charge!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();

}