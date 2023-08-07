"use strict";
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelectorAll(".show-model");
const openModel = function () {
  console.log("button clicked");
  model.classList.remove("hidden");
  model.classList.remove("hidden");
};
const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", openModel);
}

overlay.addEventListener("click", closeModel);
btnCloseModel.addEventListener("click", closeModel);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
