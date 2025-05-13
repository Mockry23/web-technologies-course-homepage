let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(index) {
  slides. forEach((slide, i) => {
    slides.classlist.toggle("active",i ===index);
  });
}  
prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

// Optional: Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevButton.click();
  } else if (e.key === "ArrowRight") {
    nextButton.click();
  }
});
