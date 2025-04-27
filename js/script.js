document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskTitle = document.getElementById("task-title");
  const taskList = document.getElementById("task-list");

  // Charger les tâches existantes
  fetchTasks();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskTitle.value);
    taskTitle.value = "";
  });

  function fetchTasks() {
    fetch("php/get-tasks.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de serveur");
        }
        return response.json();
      })
      .then((data) => {
        taskList.innerHTML = "";
        data.forEach((task) => {
          const li = document.createElement("li");
          li.innerHTML = `
                    <span style="text-decoration: ${
                      task.status === "terminée" ? "line-through" : "none"
                    }">
                        ${task.title}
                    </span>
                    <button onclick="toggleStatus(${task.id}, '${
            task.status
          }')">
                        ${task.status === "en cours" ? "Terminer" : "Reprendre"}
                    </button>
                    <button onclick="deleteTask(${task.id})">Supprimer</button>
                `;
          taskList.appendChild(li);
        });
      })
      .catch((error) => {
        console.error("Erreur de récupération des tâches:", error);
      });
  }

  function addTask(title) {
    fetch("php/add-task.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `title=${encodeURIComponent(title)}`,
    }).then(fetchTasks);
  }

  window.toggleStatus = function (id, currentStatus) {
    const newStatus = currentStatus === "en cours" ? "terminée" : "en cours";
    fetch("php/update-task.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id=${id}&status=${newStatus}`,
    }).then(fetchTasks);
  };

  window.deleteTask = function (id) {
    fetch("php/delete-task.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id=${id}`,
    }).then(fetchTasks);
  };
});
