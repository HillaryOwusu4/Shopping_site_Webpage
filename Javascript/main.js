// window.onload = function() {
//     slider1();
//     slider2();
// };
// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayv1 = document.getElementById("range");
// let displayv2 = document.getElementById("range1");

// let minGap = 0;
// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").;

// function slider1() {
//     if ((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap) {
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayv1.textContent = sliderOne.value;
//     fillColor();
// }

// function slider2() {
//     if ((parseInt(sliderTwo.value) - parseInt(sliderOne.value)) <= minGap) {
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayv2.textContent = sliderTwo.value
//     fillColor();
// }

// function fillColor() {
//     percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//     sliderTrack.style.background = `linear-gradient(to right,blue,blue)`;
//     console.log(sliderTrack.style.background)
// }