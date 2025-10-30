const schedules = {
  senin: [
    { pelajaran: "Matematika", waktu: "07.30", kelas: "IPA 1" },
    { pelajaran: "Bahasa Inggris", waktu: "10.30", kelas: "IPA 1" },
  ],
  selasa: [{ pelajaran: "Fisika", waktu: "08.00", kelas: "IPA 1" }],
  rabu: [{ pelajaran: "Kimia", waktu: "09.00", kelas: "IPA 1" }],
  kamis: [
    { pelajaran: "Biologi", waktu: "07.30", kelas: "IPA 1" },
    { pelajaran: "Sosiologi", waktu: "10.00", kelas: "IPS 2" },
  ],
  jumat: [{ pelajaran: "Olahraga", waktu: "07.30", kelas: "Semua" }],
  sabtu: [{ pelajaran: "Seni Budaya", waktu: "09.00", kelas: "IPA 1" }],
};

function showSchedule(day, event) {
  const container = document.getElementById("schedule");
  const dayButtons = document.querySelectorAll(".day");
  dayButtons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const list = schedules[day] || [];
  container.innerHTML =
    list
      .map(
        (item) => `
    <div class="subject">
      <b>${item.pelajaran}</b>
      <small>${item.waktu}</small>
      <small><b>${item.kelas}</b></small>
    </div>
  `
      )
      .join("") || "<p>Tidak ada jadwal.</p>";
}
