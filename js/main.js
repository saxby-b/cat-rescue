const buttons = document.querySelectorAll("button");
const span = document.querySelector(".copyright");
const d = new Date();
const year = d.getFullYear();
span.innerText = year;

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    alert("Thank you for donating to Cat Rescue!");
  })
);
