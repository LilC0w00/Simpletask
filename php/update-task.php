<?php
// Connexion à la base
$pdo = new PDO('mysql:host=localhost;dbname=simple_task', 'root', '', [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

// Vérifie si un id a été envoyé
if (isset($_POST['id'])) {
  $id = intval($_POST['id']);

  // Update la tâche pour la marquer comme "done"
  $stmt = $pdo->prepare('UPDATE task SET status = "done" WHERE id = ?');
  $stmt->execute([$id]);

  echo "Tâche mise à jour avec succès";
} else {
  echo "Erreur : ID manquant";
}
