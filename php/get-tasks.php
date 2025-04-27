<?php
include 'connexion.php';

$sql = "SELECT * FROM tasks ORDER BY created_at DESC";
$result = $conn->query($sql);

$taches = [];

while ($row = $result->fetch_assoc()) {
  $taches[] = $row;
}

echo json_encode($taches);
