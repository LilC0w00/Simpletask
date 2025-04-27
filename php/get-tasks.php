<?php
$pdo = new PDO('mysql:host=localhost;dbname=simple_task', 'root', '');

$stmt = $pdo->query('SELECT * FROM task ORDER BY created_at DESC');
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tasks);
