<?php
// Connexion à la base
$pdo = new PDO('mysql:host=localhost;dbname=simple_task', 'root', '', [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

// Vérifie si un id a été envoyé
if (isset($_POST['id'])) {
  $id = intval($_POST['id']);

  // Supprime la tâche de la base de données
  $stmt = $pdo->prepare('DELETE FROM task WHERE id = ?');
  $stmt->execute([$id]);

  echo "Tâche supprimée avec succès";
} else {
  echo "Erreur : ID manquant";
}
