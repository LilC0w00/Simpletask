// Ajouter une task
function addTask(title) {
  fetch("php/add-task.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "title=" + encodeURIComponent(title),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      loadTasks(); // Recharger la liste
    });
}

// Charger toutes les tasks
function loadTasks() {
  fetch("php/get-tasks.php")
    .then((response) => response.json())
    .then((tasks) => {
      // Trier les tâches : les "Terminé" en bas
      tasks.sort((a, b) => {
        if (a.status === "done" && b.status !== "done") {
          return 1;
        } else if (a.status !== "done" && b.status === "done") {
          return -1;
        }
        return 0;
      });

      const list = document.getElementById("taskList");
      list.innerHTML = ""; // Réinitialise la liste

      tasks.forEach((task) => {
        const li = document.createElement("li");

        let statusText = "";
        if (task.status === "pending") {
          statusText = "À faire";
          li.className = "pending";
        } else if (task.status === "done") {
          statusText = "Terminé";
          li.className = "done";
        } else {
          statusText = task.status;
        }

        li.innerText = task.title + " - " + statusText;

        // Créer le bouton "Marquer comme Terminé" seulement pour les tâches à faire
        if (task.status === "pending") {
          const button = document.createElement("button");
          button.innerText = "Marquer comme Terminé";
          button.className = "mark-done-btn";
          button.addEventListener("click", function () {
            markAsDone(task.id, li);
          });

          li.appendChild(button);
        }

        // Créer le bouton "Supprimer"
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Supprimer";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
          deleteTask(task.id, li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des tâches:", error);
    });
}

function submitTask() {
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (title !== "") {
    addTask(title);
    input.value = ""; // Reset le champ input
  }
}

function markAsDone(taskId, liElement) {
  fetch("php/update-task.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "id=" + encodeURIComponent(taskId),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      // Met à jour le statut de la tâche dans le DOM pour la rendre verte et déplacée
      liElement.classList.remove("pending");
      liElement.classList.add("done");

      // Déplace la tâche en bas de la liste
      const list = document.getElementById("taskList");
      list.appendChild(liElement);
    });
}

function deleteTask(taskId, liElement) {
  fetch("php/delete-task.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "id=" + encodeURIComponent(taskId),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Supprimer la tâche de l'interface
      liElement.remove();
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression de la tâche:", error);
    });
}

// À l'initialisation
loadTasks();
