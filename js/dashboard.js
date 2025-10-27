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
  $("#schedule-container").on("click", ".card-schedule", function () {
    $("#main-content-place").load("material_and_assignment/card.html");
  });
});
