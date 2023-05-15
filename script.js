const button = document.getElementsByClassName("submit");

const numberYears = document.getElementById("number-years");
const numberMonth = document.getElementById("number-month");
const numberDay = document.getElementById("number-days");

function handleClick(e) {
  e.preventDefault();
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  const dataD = +day.value;
  const dataM = +month.value;
  const dataY = +year.value;

  const dataAtual = new Date();
  if (dataD > 31 || dataD === 0 || dataD === null) {
    day.style.borderColor = "red";
    document.getElementsByClassName("labelD")[0].style.color = "red";
  }
  if (dataM > 12 || dataM === 0 || dataM === null) {
    month.style.borderColor = "red";
    document.getElementsByClassName("labelM")[0].style.color = "red";
  }
  if (dataY > +dataAtual.getFullYear() || dataY === 0 || dataY === null) {
    year.style.borderColor = "red";
    document.getElementsByClassName("labelY")[0].style.color = "red";
  }

  if (dataD) {
    document.getElementById("number-day").innerText = dataD;
  }
  if (dataM) {
    document.getElementById("number-month").innerText = dataM;
  }
  if (dataY) {
    document.getElementById("number-year").innerText = dataY;
  }
}

button[0].addEventListener("click", handleClick);
