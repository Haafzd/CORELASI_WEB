const courses = [
  { name: "Matematika", class: "IPA 1" },
  { name: "Fisika", class: "IPA 1" },
  { name: "Kimia", class: "IPA 1" },
];

const courseContainer = document.getElementById("courseContainer");

courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("course-card");

  card.innerHTML = `
    <h4>${course.name}</h4>
    <p>• ${course.class}</p>
  `;

  courseContainer.appendChild(card);
});
