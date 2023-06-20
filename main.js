// document.onwheel = function (event) {
//   let pos = window.scrollY;
//   console.log(pos);
//   if (pos > 1100) {
//     const elsP = document.querySelectorAll("#FirstItemTop");
//     console.log(elsP);
//     for (let el = 0; el < elsP.length; el++) {
//       //   count = 0;
//       console.log(elsP[el]);
//       setTimeout(function () {
//         elsP[el].classList.remove("off");
//       }, 250 * (el + 1));
//     }
//   }
// };

// function aniScroll(posX, selector) {
window.onscroll = function (event) {
  let pos = window.scrollY;
  if (pos > 1100) {
    const elsP = document.querySelectorAll("#FirstItemTop");
    for (let el = 0; el < elsP.length; el++) {
      setTimeout(function () {
        elsP[el].classList.remove("off");
      }, 250 * (el + 1));
    }
  }
  if (pos > 1700) {
    const brand = document.querySelectorAll("#brand");
    console.log(pos);
    for (let el = 0; el < brand.length; el++) {
      setTimeout(function () {
        brand[el].classList.remove("offY");
        brand[el].classList.add("onY");
      }, 200 * (el + 1));
    }
  }
  if (pos > 2500) {
    const brand = document.querySelectorAll("#price-item");
    console.log(pos);
    for (let el = 0; el < brand.length; el++) {
      setTimeout(function () {
        brand[el].classList.remove("offRotate");
        brand[el].classList.add("onY");
      });
    }
  }
};
// }

// aniScroll(1100, "#FirstItemTop");

// document.querySelectorAll("#brand").classList.add("animate__animated");
// aniScroll(1200, "#brand");

// document.onwheel2 = function (e) {
//   let posWhil = window.scrollY;
//   console.log(posWhil);
//   if (posWhil > 300) {
//     const elsP2 = document.querySelector(".brands");
//     for (let el = 0; el < elsP2.length; el++) {
//       setTimeout(function () {
//         elsP2[el].classList.remove("off");
//       }, 250 * (el + 1));
//     }
//   }
// };
