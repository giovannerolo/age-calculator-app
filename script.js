function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const currentDate = new Date();

  const birthDate = new Date(year, month - 1, day);

  const difference = currentDate - birthDate;

  const age = {};
  age.year = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));
  age.month = Math.floor(
    (difference % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  age.day = Math.floor(
    (difference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  if (day < 1 || day > 31) {
    document.getElementById("day").style.borderColor = "red";
  }
  if (month < 1 || month > 12) {
    document.getElementById("month").style.borderColor = "red";
  }
  if (year < 1900 || year > new Date().getFullYear()) {
    document.getElementById("year").style.borderColor = "red";
  } else {
    document.getElementById("number-year").textContent = age.year;
    document.getElementById("number-month").textContent = age.month;
    document.getElementById("number-day").textContent = age.day;
  }
}

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  calculateAge();
});
