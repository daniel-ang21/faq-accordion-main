(function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let answer = button.parentElement.nextElementSibling;
      answer.classList.toggle("answer-show");

      let icon = button.querySelector("img");
      if (answer.classList.contains("answer-show")) {
        icon.src = "./assets/images/icon-minus.svg";
      } else {
        icon.src = "./assets/images/icon-plus.svg";
      }
    });
  });
})();
