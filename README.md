# Simpletask

**SimpleTask** est une application de gestion de tâches simple, permettant d'ajouter, de marquer comme terminées et de supprimer des tâches.  
Les tâches sont stockées dans une base de données **MySQL**.  
Le projet est développé avec **HTML**, **CSS**, **JavaScript**, et **PHP**.

---

## 📁 Structure du projet

```
simpletask/
├── php/
│   ├── add-task.php        # Script pour ajouter une nouvelle tâche
│   ├── delete-task.php     # Script pour supprimer une tâche
│   ├── get-tasks.php       # Script pour récupérer toutes les tâches
│   └── update-task.php     # Script pour mettre à jour le statut d'une tâche
│
├── bd/
│   └── simple_task.sql     # Script pour créer la base de données et la table 'task'
│
├── js/
│   └── script.js           # Code JavaScript pour l'interactivité (AJAX)
│
├── css/
│   └── style.css           # Feuille de styles CSS pour l'application
│
├── index.html              # Page HTML principale
└── README.md               # Documentation du projet
```

---

## 🚀 Fonctionnalités

- **Ajouter une tâche**
  - Entrez un titre et cliquez sur **"Ajouter"**.
  - La tâche est enregistrée dans la base de données et affichée dans la liste.

- **Marquer une tâche comme terminée**
  - Cliquez sur **"Marquer comme Terminé"** pour changer son statut.
  - La tâche est affichée en vert et déplacée en bas de la liste.

- **Supprimer une tâche**
  - Cliquez sur **"Supprimer"** pour retirer définitivement une tâche de la liste et de la base de données.

---

## ⚙️ Prérequis

Avant de démarrer, assurez-vous d'avoir installé :

- [PHP](https://www.php.net/) (version 7.4 ou supérieure recommandée)
- [MySQL](https://www.mysql.com/) (ou MariaDB)
- Un serveur local type [XAMPP](https://www.apachefriends.org/index.html), [MAMP](https://www.mamp.info/fr/), ou [WAMP](https://www.wampserver.com/)

---

## 🛠️ Installation

### 1. Configuration de la base de données

- Importez le fichier `bd/simple_task.sql` dans votre serveur MySQL (via phpMyAdmin ou en ligne de commande).

```sql
CREATE DATABASE simple_task;

USE simple_task;

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status ENUM('pending', 'done') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. Mise en place du projet

- Déplacez le dossier `simpletask/` dans le répertoire de votre serveur local (par exemple `htdocs/` pour XAMPP).
- Démarrez Apache et MySQL via votre panneau de contrôle serveur.
- Ouvrez votre navigateur et accédez à :  
  `http://localhost/simpletask/index.html`

---

### 3. Test de fonctionnement

- Ajoutez, terminez et supprimez des tâches depuis l'interface.
- Vérifiez que les modifications sont bien reflétées dans la base de données.

---

## 🛠️ Technologies utilisées

- **HTML/CSS** : structure et design de l'interface utilisateur.
- **JavaScript** (Fetch API) : interactivité côté client.
- **PHP** : traitement des requêtes côté serveur.
- **MySQL** : stockage des données.

---

## 👤 Auteur

Développé par **[Ton Nom ou Pseudo]**.

---

## 📄 Licence

Ce projet est sous licence **MIT**.  
Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

