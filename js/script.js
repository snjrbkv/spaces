
// const slider = document.getElementById('slider');
// const nextBtn = document.getElementById('prevBtn');
// const prevBtn = document.getElementById('nextBtn');

// let currentSlide = 0;
// let slideWidth = 150; // ширина элемента

// slider.style.transform = `translateX(${currentSlide * slideWidth}px)`;

// prevBtn.addEventListener('click', () => {
//   currentSlide--;
//   slider.style.transform = `translateX(${currentSlide * slideWidth}px)`;
// });

// nextBtn.addEventListener('click', () => {
//   currentSlide++;
//   slider.style.transform = `translateX(${currentSlide * slideWidth}px)`;
// });

let burgerWrapper = document.querySelectorAll(".burger-wrapper");

burgerWrapper.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.toggle("active");
  });
});
let barItem = document.querySelectorAll(".side-bar--item");
barItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("active");
  });
});
