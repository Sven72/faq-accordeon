// https://medium.com/@wales149/how-to-create-an-accordion-using-html-css-javascript-3853cd02ce3f

// https://medium.com/@vikash20186/creating-accordion-with-javascript-a33743655474

// let questionTab = document.querySelectorAll("#question");

// for (var i = 0; i < questionTab.length; i++) {
//   questionTab[i].addEventListener("click", () => {
//     console.log(parentElement);
//   });
// }

var accordionElem = document.getElementById("accordion");

function initAccordion(accordionElem) {
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }

  function showPanel(panel) {
    //Hide current one. First time it will be null.
    var expandedPanel = accordionElem.querySelector(".active");
    if (expandedPanel) {
      expandedPanel.classList.remove("active");
    } //Show new one
    panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener("click", handlePanelClick);
  } //By Default Show first panel
  showPanel(allPanelElems[0]);
}

initAccordion(accordionElem);

console.log(document.getElementById("accordion"));
