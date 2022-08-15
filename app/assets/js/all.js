const elem = document.querySelector('input[name="foo"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    format: "yyyy/mm/dd",
    language: "zh-TW",
  });
}

const buttonsUl_li = document.querySelectorAll(".buttonsUl > li");
buttonsUl_li.forEach((e) => {
  e.addEventListener("click", function () {
    buttonsUl_li.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const path_name = window.location.pathname.split("/").pop().slice(0, -5);
const index = document.querySelector(".index");
const classes = document.querySelector(".classes");
if (path_name === "" || path_name === "index") {
  index.classList.add("active");
} else if (path_name === "classes" || path_name === "class-intro") {
  classes.classList.add("active");
}
