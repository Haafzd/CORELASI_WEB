$(document).ready(function () {
  fetch("data/dashboard.json")
    .then((response) => response.json())
    .then((data) => {
      const courseContainer = document.getElementById("course-container");
      courseContainer.innerHTML = "";
      data.courses.forEach((course) => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "card-course";
        courseDiv.innerHTML = `
        <a>${course.name}</a>
        <a>${course.class}</a>
    `;
        courseContainer.appendChild(courseDiv);
      });
      const scheduleContainer = document.getElementById("schedule-container");
      scheduleContainer.innerHTML = "";
      data.today_schedule.forEach((schedule) => {
        const scheduleDiv = document.createElement("div");
        scheduleDiv.className = "card-schedule";
        scheduleDiv.innerHTML = `
        <a>${schedule.subject}</a>
        <a>${schedule.time}</a>
        <a>${schedule.class}</a>
    `;
        scheduleContainer.appendChild(scheduleDiv);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
  $("#course-container").on("click", ".card-course", function () {
    $("#main-content-place").load("material_and_assignment/card.html");
  });
});

const popup = document.getElementById("bapPopup");
const closeBtn = document.getElementById("closePopup");
const saveBtn = document.getElementById("saveBAP");

document.querySelectorAll("#schedule-container").forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  const materi = document.getElementById("materiInput").value;
  const indikator = document.getElementById("indikatorInput").value;
  const tempat = document.getElementById("tempatInput").value;

  console.log("Data BAP disimpan:", { materi, indikator, tempat });
  alert("BAP berhasil disimpan!");
  popup.style.display = "none";
});
