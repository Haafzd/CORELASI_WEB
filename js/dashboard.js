$("#bapPopup").hide();
$(document).ready(function () {
 
  fetch("data/dashboard.json")
    .then((response) => response.json())
    .then((data) => {
      const courseContainer = $("#course-container");
      courseContainer.html("");
      data.courses.forEach((course) => {
        const courseDiv = $(`
          <div class="card-course">
            <a>${course.name}</a>
            <a>${course.class}</a>
          </div>
        `);
        courseContainer.append(courseDiv);
      });
    })
});