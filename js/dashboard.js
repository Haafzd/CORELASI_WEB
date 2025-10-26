const courses = [
  { name: "Matematika", class: "IPA 1" },
  { name: "Fisika", class: "IPA 1" },
  { name: "Kimia", class: "IPA 1" },
];

const courseContainer = document.getElementById("courseContainer");

courses.forEach((course) => {
  const card = document.createElement("div");
  card.classList.add("course-card");

  card.innerHTML = `
    <h4>${course.name}</h4>
    <p>• ${course.class}</p>
  `;

  courseContainer.appendChild(card);
});

// ==== POPUP LOGIC ====
const popup = document.getElementById("bapPopup");
const closeBtn = document.getElementById("closePopup");
const saveBtn = document.getElementById("saveBAP");

// Ketika klik salah satu schedule card → tampilkan popup
document.querySelectorAll(".schedule-card").forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

// Tombol batal menutup popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Tombol simpan (contohnya hanya menutup popup)
saveBtn.addEventListener("click", () => {
  const materi = document.getElementById("materiInput").value;
  const indikator = document.getElementById("indikatorInput").value;
  const tempat = document.getElementById("tempatInput").value;

  console.log("Data BAP disimpan:", { materi, indikator, tempat });
  alert("BAP berhasil disimpan!");
  popup.style.display = "none";
});
