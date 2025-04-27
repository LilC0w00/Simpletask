<?php
include 'connexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['title'])) {
    $title = $_POST['title'];

    if (!empty($title)) {
      $stmt = $conn->prepare("INSERT INTO tasks (title) VALUES (?)");
      $stmt->bind_param("s", $title);
      $stmt->execute();
      $stmt->close();
      echo json_encode(["success" => true]);
    } else {
      echo json_encode(["error" => "Titre vide"]);
    }
  } else {
    echo json_encode(["error" => "Aucun titre fourni"]);
  }
} else {
  echo json_encode(["error" => "Méthode incorrecte"]);
}

$conn->close();
