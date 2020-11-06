// https://medium.com/@wales149/how-to-create-an-accordion-using-html-css-javascript-3853cd02ce3f

// https://medium.com/@vikash20186/creating-accordion-with-javascript-a33743655474

var acc = document.getElementsByClassName("main-question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    // this.nextElementSibling.classList.toggle("show");
  };

  console.log("klicked " + i);
}
