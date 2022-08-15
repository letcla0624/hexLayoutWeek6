"use strict";

var elem = document.querySelector('input[name="foo"]');

if (elem) {
  var datepicker = new Datepicker(elem, {
    format: "yyyy/mm/dd",
    language: "zh-TW"
  });
}

var buttonsUl_li = document.querySelectorAll(".buttonsUl > li");
buttonsUl_li.forEach(function (e) {
  e.addEventListener("click", function () {
    buttonsUl_li.forEach(function (item) {
      return item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
var path_name = window.location.pathname.split("/").pop().slice(0, -5);
var index = document.querySelector(".index");
var classes = document.querySelector(".classes");

if (path_name === "" || path_name === "index") {
  index.classList.add("active");
} else if (path_name === "classes" || path_name === "class-intro") {
  classes.classList.add("active");
}
//# sourceMappingURL=all.js.map
