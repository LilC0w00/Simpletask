<?php
include 'connexion.php';

$title = $_POST['title'];

if (!empty($title)) {
  $stmt = $conn->prepare("INSERT INTO tasks (title) VALUES (?)");
  $stmt->bind_param("s", $title);
  $stmt->execute();
  $stmt->close();
}

$conn->close();
