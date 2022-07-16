// var ul = document.getElementsByClassName("slider-img-list");
// console.log(ul);
// var li = document.getElementsByClassName("slider-img");
// console.log("check before forloop");
// for (var i = 0; i < li.length; i++) {
//   console.log(i);
//   li[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].classList.remove("active");
//     this.className += " active";
//   });
// }


const slider = document.querySelectorAll(".slider-img");
console.log(slider);

slider.forEach(imgSelector);

function imgSelector(item) {
  item.addEventListener("click", openImg);
  function openImg() {
    removeActive();
    item.classList.add("active");
  }
}

function removeActive() {
  slider.forEach(removeClass);

  function removeClass(item) {
    item.classList.remove("active");
  }
}