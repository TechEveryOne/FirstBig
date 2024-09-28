let next = document.querySelector(".right-icon");
let prev = document.querySelector(".left-icon");
let slider = document.querySelector(".image");
let image = document.querySelector(".imageandtext");
let hiddendiv = document.querySelector(".hidden-div");
let header = document.querySelector(".header");
let heroimage = document.querySelector(".hero-image-section");

let heroimagewidth = heroimage.offsetHeight;
let imagewidth = image.offsetWidth;

window.addEventListener("scroll", () => {
  if (this.scrollY > heroimagewidth) {
    header.classList.add("sticky");
    hiddendiv.style.position = "relative";
  } else {
    header.classList.remove("sticky");
    hiddendiv.style.position = "absolute";
  }
});
next.addEventListener("click", () => {
  slider.scrollLeft += imagewidth;
  console.log(slider.scrollLeft);
});

prev.addEventListener("click", () => {
  slider.scrollLeft -= imagewidth;
  console.log(slider.scrollLeft);
});
