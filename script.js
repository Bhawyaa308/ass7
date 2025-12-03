document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();
  
  if (!title || !desc) {
    alert("Please enter both title and description!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const titleEl = document.createElement("h3");
  titleEl.classList.add("title");
  titleEl.textContent = title;

  const descEl = document.createElement("p");
  descEl.classList.add("description");
  descEl.textContent = desc;

  // Buttons
  const markBtn = document.createElement("button");
  markBtn.textContent = "Mark as Completed";
  markBtn.classList.add("mark-btn");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Append elements
  taskDiv.append(titleEl, descEl, markBtn, editBtn, deleteBtn);
  taskList.appendChild(taskDiv);

  // Clear input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";

  // Functionality
  markBtn.addEventListener("click", () => {
    taskDiv.classList.toggle("completed");
    markBtn.textContent = taskDiv.classList.contains("completed")
      ? "Mark as Incomplete"
      : "Mark as Completed";
  });

  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
  });

  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      const editTitle = document.createElement("input");
      editTitle.value = titleEl.textContent;

      const editDesc = document.createElement("textarea");
      editDesc.value = descEl.textContent;

      taskDiv.replaceChild(editTitle, titleEl);
      taskDiv.replaceChild(editDesc, descEl);

      editBtn.textContent = "Save";

      editBtn.onclick = () => {
        titleEl.textContent = editTitle.value;
        descEl.textContent = editDesc.value;

        taskDiv.replaceChild(titleEl, editTitle);
        taskDiv.replaceChild(descEl, editDesc);

        editBtn.textContent = "Edit";
        editBtn.onclick = () => editBtn.click();
      };
    }
  });
}
