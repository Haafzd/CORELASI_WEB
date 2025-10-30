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

      const scheduleContainer = $("#schedule-container");
      scheduleContainer.html("");
      data.today_schedule.forEach((schedule) => {
        const scheduleDiv = $(`
          <div class="card-schedule">
            <a>${schedule.subject}</a>
            <a>${schedule.time}</a>
            <a>${schedule.class}</a>
          </div>
        `);
        scheduleContainer.append(scheduleDiv);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
  $(document).on("click", ".card-course", function () {
    $("#main-content-place").load("material_and_assignment/card.html");
  });

  $(document).on("click", ".card-schedule", function () {
    $("#bapPopup").show();
  });

  $(document).on("click", "#closePopup", function () {
    $("#bapPopup").hide();
  });

  $(document).on("click", "#saveBAP", function () {
    const materi = $("#materiInput").val();
    const indikator = $("#indikatorInput").val();
    const tempat = $("#tempatInput").val();

    console.log("Data BAP disimpan:", { materi, indikator, tempat });
    alert("BAP berhasil disimpan!");
    $("#bapPopup").hide();
  });
});
