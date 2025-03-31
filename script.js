const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll(".slides img");

indicators.forEach((element, index) => {
  element.addEventListener("click", () => {
      indicators.forEach(indicator=>{indicator.classList.remove("active");});
    
    element.classList.add("active");
    images[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
  });
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetIndex = entry.target.dataset.index;
      if (entry.isIntersecting) {
        indicators.forEach(indicator => {
            indicator.classList.remove("active");
          });
        indicators[targetIndex].classList.add("active");
      }
    });
  },
  {
    root: document.querySelector(".carousel"),

    threshold: 0.5,
  }
);


images.forEach((element) => {
  observer.observe(element);
});