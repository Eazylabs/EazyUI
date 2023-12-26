import CarouselBarChevron from '../blocks/CarouselBarChevron';

export const CAROUSELBARCHEVRON = {
  html: `<div class="carousel">
  <div class="fade slide">
    <img
      src="https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="slide"
    />
  </div>
  <div class="fade slide">
    <img
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="slide"
    />
  </div>
  <div class="fade slide">
    <img
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="slide"
    />
  </div>

  <button class="prev">&#8249;</button>
  <button class="next">&#8250;</button>

  <div class="dots">
    <span class="bar-chevron"></span>
    <span class="bar-chevron"></span>
    <span class="bar-chevron"></span>
  </div>
</div>`,
  css: `.carousel {
  width: 100%;
  max-height: 300px;
  position: relative;
  overflow: hidden;
  background-color: #000;
}

.slide {
  position: absolute;
  display: none;
}

.carousel img {
  width: 100%;
  object-fit: cover;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  z-index: 1;
  font-size: 40px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot-chevron {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
}

.dot-chevron:hover {
  background-color: white;
}

.active {
  background-color: white;
}

.fade {
  animation-name: fade;
  animation-duration: 1s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}`,
  javascript: `const slide = document.querySelectorAll(".fade");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dots span");

let slideIndex = 0;

const showSlide = (index) => {
  if (index > slide.length - 1) {
    slideIndex = 0;
    return showSlide(0);
  } else if (index < 0) {
    slideIndex = slide.length - 1;
    return showSlide(slide.length - 1);
  }
  slide[index].classList.remove("slide");
  slide.forEach((item, i) => {
    if (i !== index) {
      item.classList.add("slide");
    }
  });
  dots.forEach((item, i) => {
    item.addEventListener("click", () => {
      showSlide(i);
    });
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

next.addEventListener("click", () => {
  slideIndex++;
  console.log("ini jalan cuy next", slideIndex);
  showSlide(slideIndex);
});

prev.addEventListener("click", () => {
  console.log("ini jalan cuy prev", slideIndex);
  showSlide(slideIndex--);
});

showSlide(slideIndex);
`,
  element: CarouselBarChevron,
};
