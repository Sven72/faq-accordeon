let question = document.querySelectorAll(".main-question");

question.forEach(e => {
  e.addEventListener("click", () => {
    e.classList.toggle("highlight");
    let answer = e.nextElementSibling;
    answer.classList.toggle("active");
  });
});
