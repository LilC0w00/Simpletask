<?php
$pdo = new PDO('mysql:host=localhost;dbname=simple_task', 'root', '');
$title = $_POST['title'];

$stmt = $pdo->prepare('INSERT INTO task (title, status, created_at) VALUES (?, "pending", NOW())');
$stmt->execute([$title]);

echo "Task added";
