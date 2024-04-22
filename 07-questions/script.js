const questions = document.querySelectorAll(".faq");
let currentBtn = null; 

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        const otherBtn = item.querySelector(".question-btn i");
        otherBtn.classList.remove("fa-chevron-up");
        otherBtn.classList.add("fa-chevron-down");
      }
    });

    question.classList.toggle("show-text");

    const icon = btn.querySelector("i");
    if (question.classList.contains("show-text")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      currentBtn = btn; 
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      currentBtn = null; 
    }
  });
});