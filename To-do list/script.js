    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");
      const emptyState = document.getElementById("emptyState");
      
      if (taskInput.value.trim() === "") {
        taskInput.focus();
        return;
      }
      
      // Hide empty state if visible
      if (emptyState.style.display !== "none") {
        emptyState.style.display = "none";
      }
      
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-text">${taskInput.value.trim()}</span>
        <button class="delete-btn" onclick="this.parentElement.remove(); checkEmptyState()">
          <i class="fas fa-times"></i>
        </button>
      `;
      
      taskList.appendChild(li);
      taskInput.value = "";
      taskInput.focus();
    }
    
    function checkEmptyState() {
      const taskList = document.getElementById("taskList");
      const emptyState = document.getElementById("emptyState");
      
      if (taskList.children.length === 0) {
        emptyState.style.display = "block";
      }
    }
    
    // Allow adding tasks with Enter key
    document.getElementById("taskInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });