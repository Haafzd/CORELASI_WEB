fetch('data/course.json')

  .then(r => r.json())

  .then(list => {

    const page = $('#course-page');

    list.forEach(item => {

      const timeText = `${item.day}, ${item.start} - ${item.end}`;

      page.append(`

        <div class="course-card">

          <div class="course-info">

            <h3>${item.subject}</h3>

            <p>${item.teacher || ''}</p>

            <div class="course-time">

              <img src="/aset/bell.png" class="bell-ic" alt="bell" title="Set reminder">

              <span>${timeText}</span>

            </div>

          </div>

          <div class="course-arrow">›</div>

        </div>

      `);

    });

  });