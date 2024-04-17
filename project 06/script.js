// let modal = document.getElementById("myModal");

// let btn = document.getElementById("myBtn");

// let closeBtn = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// closeBtn.onclick = function() {
//   modal.style.display = "none";
// }
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};
