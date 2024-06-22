const mainBtn = document.querySelector(".mobile-nav-btn");
const headerSelect = document.querySelector(".header-style");

mainBtn.addEventListener("click", function () {
  headerSelect.classList.toggle("active");
});

// let timeline = gsap.timeline();

// timeline.from(".logo img, .header-style .nav-links .nav-list li", {
//   y: -60,
//   opacity: 0,
//   delay: 0.5,
//   duration: 0.8,
//   stagger: 0.3,
// });

// timeline.from(".hero-content", {
//   x: 1200,
//   delay: 0.5,
//   duration: 0.8,
// });

// let timeline2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second-content",
//     scroller: "body",
//     // markers:true
//     start: "top 80%",
//     end: "top 40%",
//     scrub: 2,
//   }
// });

// timeline2.from('.second-image img',{
//     x:-900,
//     delay:0.5,
//     duration:1.5
// })

// timeline2.from('.image-content',{
//     x:1000,
//     delay:0.8,
//     duration:1

// })