// Add active class to the current button (highlight it)
var header = document.getElementsByClassName("slider-img-list");
var slider_img = header.getElementsByClassName("slider-img");
for (var i = 0; i < slider_img.length; i++) {
  slider_img[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}