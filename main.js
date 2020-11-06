let question = document.querySelectorAll(".main-question");

question.forEach(e => {
  e.addEventListener("click", () => {
    let answer = e.nextElementSibling;
    answer.classList.toggle("active");
  });
});
