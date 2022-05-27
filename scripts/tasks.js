const form = document.getElementById("form").addEventListener("submit", submit);
const modalForm = document
  .getElementById("cloneFormModal")
  .addEventListener("submit", submit);
modal.addEventListener("submit", () => {
  document.getElementById("modal").style.display = "none";
});
const newTaskContainer = document.getElementById("newTasksContainer");
const comletedTaskContainer = document.getElementById("completedContainer");

var newTasks = [];
var completedTasks = [];

//Envia a task para a lista newTask
function submit(e) {
  e.preventDefault();

  var formData = new FormData(e.target);
  var taskTexT = formData.get("task");

  if (taskTexT.length > 0) {
    newTasks.push(capitalize(taskTexT));
    orderAndList(newTasks, newTaskContainer);
    addTaskventListener();
    e.target.children[0].value = "";
  }
}

//Ordena e renderiza as listas
function orderAndList(list, container) {
  var taskList = list.sort((a, b) => {
    return a == b ? 0 : a > b ? 1 : -1;
  });

  container.innerHTML = "";

  let isNewContainer = container.classList.value === "newTasksContainer";

  if (isNewContainer) {
    taskList.forEach((task) => createNewTask(task, container));
  } else {
    taskList.forEach((task) => createCompletedTask(task, container));
  }

  addTaskventListener();
}

//Adiciona um listener em todas as tasks
function addTaskventListener() {
  let tasks = document.querySelectorAll(".taskDescription");
  for (let item of tasks) {
    item.addEventListener("click", checkContainer);
  }
}

function changePlace(item, delList, addList) {
  const index = delList.findIndex((t) => t === item);
  delList.splice(index, 1);
  addList.push(capitalize(item));
}

//Verifica em qual container a task está
function checkContainer(e) {
  let container = e.target.parentNode.parentNode;
  let taskValue = e.target.innerText;

  let isNewContainer = container.classList.value === "newTasksContainer";

  if (isNewContainer) {
    changePlace(taskValue, newTasks, completedTasks);
  } else {
    changePlace(taskValue, completedTasks, newTasks);
  }
  /* console.log("newtask: " + newTasks);
  console.log("completedTask: " + completedTasks); */

  orderAndList(newTasks, newTaskContainer);
  orderAndList(completedTasks, comletedTaskContainer);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substr(1);
}

//Monta os elementos
function createNewTask(task, container) {
  const textTask = document.createTextNode(task);
  const li = document.createElement("li");
  li.classList.add("task");
  const span = document.createElement("span");
  span.classList.add("circle");
  const p = document.createElement("p");
  p.classList.add("taskDescription", "pointer");

  p.appendChild(textTask);
  li.appendChild(span);
  li.appendChild(p);

  container.appendChild(li);
}

function createCompletedTask(task) {
  const textTask = document.createTextNode(task);
  const li = document.createElement("li");
  li.classList.add("task");
  const span = document.createElement("span");
  span.classList.add("circle", "filled");
  const p = document.createElement("p");
  p.classList.add("taskDescription", "pointer", "done");

  p.appendChild(textTask);
  li.appendChild(span);
  li.appendChild(p);

  comletedTaskContainer.appendChild(li);
}
