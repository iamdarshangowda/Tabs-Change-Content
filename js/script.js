let about = document.getElementById("aboutBtn"),
  visit = document.getElementById("visitBtn"),
  reach = document.getElementById("reachBtn");

let textArea = document.getElementById("displayTxt");

let aboutText = document.getElementById("aboutTxt"),
  visitText = document.getElementById("visitTxt"),
  reachText = document.getElementById("reachTxt");

about.addEventListener("click", function () {
  textArea.innerHTML = aboutText.innerHTML;
  aboutText.style.display = "block";
  visitText.style.display = "none";
  reachText.style.display = "none";
});

visit.addEventListener("click", function () {
  textArea.innerHTML = visitText.innerHTML;
  visitText.style.display = "block";
  aboutText.style.display = "none";
  reachText.style.display = "none";
});

reach.addEventListener("click", function () {
  textArea.innerHTML = reachText.innerHTML;
  visitText.style.display = "none";
  aboutText.style.display = "none";
  reachText.style.display = "block";
});
/*
const tabBtn = document.querySelectorAll(".button");
const details = document.getElementsByClassName("details");
const article = document.querySelectorAll(".content");

details.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // remove selected from other buttons
  if (id) {
    tabBtn.forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    //hide other articles
    article.forEach((art) => art.classList.remove("active"));

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
*/
