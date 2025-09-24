const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayIndex = firstDay.getDay(); // 0 (Minggu) - 6 (Sabtu)
  const totalDays = lastDay.getDate();

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;

  datesContainer.innerHTML = "";

  // Spasi kosong sebelum tanggal 1
  for (let i = 0; i < firstDayIndex; i++) {
    datesContainer.innerHTML += `<div></div>`;
  }

  // Tanggal-tanggal bulan ini
  for (let day = 1; day <= totalDays; day++) {
    const isToday =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    datesContainer.innerHTML += `<div class="${isToday ? "today" : ""}">${day}</div>`;
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Inisialisasi pertama
renderCalendar(currentDate);
