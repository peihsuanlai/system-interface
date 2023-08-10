import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

window.addEventListener("load", () => {
  let adminPage = document.querySelector("#adminPage");
  let assignmentPage = document.querySelector("#assignmentPage");
  if (
    window.location.pathname == "/system-interface/index.html"
  ) {
    adminPage.classList.add("active");
  }
  if (
    window.location.pathname ==
    "/system-interface/assignment.html"
  ) {
    assignmentPage.classList.add("active");
  }
});
