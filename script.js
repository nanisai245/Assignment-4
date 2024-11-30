const clock = document.querySelector(".clock");
const sec = document.querySelector(".seconds");

let timerId = setInterval(digitalClock, 1000);

function digitalClock() {
  const date = new Date();

  let hours = date.getHours();

  hours >= 12 ? (hours -= 12) : hours;

  const minutes = `${date.getMinutes()}`.padStart(2, 0);
  const seconds = `${date.getSeconds()}`.padStart(2, 0);

  const modifiedHours = `${hours}`.padStart(2, 0);

  // clock.textContent = `${modifiedHours}: ${minutes}: ${seconds}`;
  clock.innerHTML = `<span>${modifiedHours}: </span><span>${minutes} </span><span class='seconds'>${seconds}</span>`;
}

const dateEl = document.querySelector(".date");

const today = new Date();

let options = {
  day: "numeric",
  month: "long",
  weekday: "short",
  year: "numeric",
};

const locale = navigator.language;
const api = new Intl.DateTimeFormat(locale, options).format(today);
dateEl.innerText = api;

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".btn-right");
const left = document.querySelector(".btn-left");
const dotContainer = document.querySelector(".dots");

// function createDots() {
//   // for (let i = 0; i < slides.length - 2; i++) {
//   //   dotContainer.insertAdjacentHTML(
//   //     "beforeend",
//   //     `<button class='dot-btn' data-slide="${i + 1}"></button>`
//   //   );
//   // }

//   slides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class='dot-btn' data-slide="${i + 1}"></button>`
//     );
//   });
// }

// createDots();

let curr = 1;

const widthSlide = slides[0].clientWidth;

slider.style.transform = `translateX(${-100 * curr}%)`;

// function activeDot(slide) {
//   document
//     .querySelectorAll(".dot-btn")
//     .forEach((each) => each.classList.remove("active"));

//   document
//     .querySelector(`.dot-btn[data-slide = '${slide}']`)
//     .classList.add("active");
// }
// activeDot(1);

next.addEventListener("click", slideRigtht);

function slideRigtht() {
  if (curr <= slides.length - 2) {
    curr++;
    slider.style.transform = `translateX(${-100 * curr}%)`;
    // curr <= 4 && activeDot(curr);
  }
}

left.addEventListener("click", slideLeft);

function slideLeft() {
  if (curr > 0) {
    curr--;
    slider.style.transform = `translateX(${-100 * curr}%)`;
  }
  // activeDot(curr);
}

slider.addEventListener("transitionend", () => {
  if (slides[curr].id === "firstClone") {
    slider.style.transition = "none";
    curr = slides.length - curr;
    // activeDot(curr);
    setTimeout(() => {
      slider.style.transition = "all 0.6s ease-in-out";
    });
    slider.style.transform = `translateX(${-100 * curr}%)`;
  }

  if (slides[curr].id === "lastClone") {
    slider.style.transition = "none";
    curr = slides.length - 2;
    // activeDot(curr);
    setTimeout(() => {
      slider.style.transition = "all 0.6s ease-in-out";
    });
    slider.style.transform = `translateX(${-100 * curr}%)`;
  }
});

function move() {
  let deleteInt = setInterval(timer, 2000);
  function timer() {
    slideRigtht();
  }

  const main = document.querySelector(".card-container");

  main.addEventListener("mouseover", function () {
    clearInterval(deleteInt);
  });

  main.addEventListener("mouseout", move);
}

move();

// function goToSlide(slide) {
//   slider.style.transform = `translateX(${-100 * slide}%)`;
//   curr = slide;
// }

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dot-btn")) {
//     const { slide } = e.target.dataset;
//     activeDot(slide);
//     goToSlide(slide);
//   }
// });

const seasons = document.querySelector(".seasons");

let word = "SEASONS";

let i = 0;

setInterval(() => {
  if (i >= word.length) {
    i = 0;
    seasons.textContent = "";
  } else {
    seasons.textContent += word[i];
    i++;
  }
}, 400);
