// https://medium.com/@wales149/how-to-create-an-accordion-using-html-css-javascript-3853cd02ce3f

let questionTab = document.querySelectorAll("#question");

for (var i = 0; i < questionTab.length; i++) {
  questionTab[i].addEventListener("click", () => {
    console.log(parentElement);
  });
}
