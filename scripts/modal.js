const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const formModal = document.getElementById("form");
const cloneFormModal = formModal.cloneNode(true);

cloneFormModal.classList.add("modalForm");
cloneFormModal.setAttribute("id", "cloneFormModal");
modalContent.appendChild(cloneFormModal);

document.getElementById("addTask").addEventListener("click", () => {
  modal.style.display = "block";
});
document.getElementById("closeBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
