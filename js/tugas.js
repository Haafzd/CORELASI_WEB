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
});
