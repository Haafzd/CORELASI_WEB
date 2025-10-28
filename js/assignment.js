$(document).ready(function () {
  $("#arrow-btn").on("click", function () {
    $("#asg-list").slideToggle(300);
    $(this).toggleClass("collapsed");
  });
  $("#add-task-btn").on("click", function () {
    $("#add-task-card").fadeIn(200);
  });
  $("#cancel-btn").on("click", function () {
    $("#add-task-card").fadeOut(200);
  });
  $("#add-task-card").on("click", function (event) {
    if (event.target === this) {
      $(this).fadeOut(200);
    }
  });
  fetch("../data/assignment.json")
    .then((response) => response.json())
    .then((data) => {
      const assigmentListContainer = document.getElementById("asg-list");
      assigmentListContainer.innerHTML = "";
      data.assignments.forEach((assignment) => {
        const assgLink = document.createElement("div");
        assgLink.className = "asg-item";
        assgLink.innerHTML = `<h3>${assignment.title}</h3>
          <p>${assignment.description}</p>
          <a href="${assignment.link}" class="item-link">${assignment.link}</a>`;
        assigmentListContainer.appendChild(assgLink);
      });
    })
    .catch((error) => console.error("error data loading: " + error));
  $("#asg-list").on("click", ".asg-item", function () {
    $("#main-content-place").load("material_and_assignment/tgsPertemuan.html");
  });
});
