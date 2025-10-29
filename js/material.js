const toggleBtn = document.getElementById("toggle-collapse-btn");
const content = document.getElementById("material-content");

if (toggleBtn && content) {
  toggleBtn.addEventListener("click", () => {
    content.classList.toggle("is-collapsed");

    toggleBtn.classList.toggle("is-toggled");
  });
}

const modal = document.getElementById("add-material-modal");
const addBtn = document.getElementById("add-material-btn");
const closeBtn = document.getElementById("close-modal-btn");
const addForm = document.getElementById("add-material-form");

function openModal() {
  if (modal) {
    modal.classList.add("is-active");
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove("is-active");
  }
}

if (addBtn) {
  addBtn.addEventListener("click", openModal);
}
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

if (addForm) {
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Materi (pura-pura) disimpan!");

    const namaMateri = document.getElementById("nama-materi").value;
    console.log("Nama Materi:", namaMateri);

    closeModal();

    addForm.reset();
  });
}
