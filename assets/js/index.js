const slider = document.querySelectorAll(".slider-img");

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