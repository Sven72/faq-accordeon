let question = document.querySelectorAll(".main-question");
let caret = document.getElementById("caret");

question.forEach(e => {
  e.addEventListener("click", () => {
    caret.classList.toggle("turn-svg");
    e.classList.toggle("highlight");
    let answer = e.nextElementSibling;
    answer.classList.toggle("active");
  });
});
