const userInput = document.getElementById("date");
const calculateButton = document.getElementById("button");
const result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const today = new Date();

  if (birthDate > today) {
    result.innerHTML = "Invalid date. Please enter a date in the past.";
    return;
  }

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    days = getDaysInMonth(currentYear, currentMonth) + days;
  }

  if (months < 0) {
    years--;
    months = 11;
  }

  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

calculateButton.addEventListener("click", calculateAge);