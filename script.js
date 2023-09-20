"user:strict";

const shareBtn = document.querySelector(".icon-share");
const shareContainers = document.querySelectorAll(".box");

shareBtn.addEventListener("click", function () {
  shareContainers.forEach((c) => {
    c.classList.toggle("toggle");
  });
});
