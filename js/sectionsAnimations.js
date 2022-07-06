// Articles section
let articlesSection = document.querySelector(".article");
let articles = document.querySelectorAll(".article .box");
let articleAnimation = true;
// articles section
//hidding articles section elements

articles.forEach((ele) => {
  ele.style.cssText = "transform: translatey(300px); opacity:0;";
});
//
//
// Gallary section
let gallarySection = document.querySelector(".gallarry");
let gallaryItems = document.querySelectorAll(".gallarry .box");
gallarySection.style.overflow = "hidden";
let gallaryAnimation = true;
// gallary section
//hidding gallary section elements
gallaryItems.forEach((ele) => {
  ele.style.cssText = "transform: translateY(300px); opacity:0;";
});
//
//
//  Features section
let featuresSection = document.querySelector(".features");
let features = document.querySelectorAll(".features .box");
let featuresAnimation = true;
featuresSection.style.overflow = "hidden";
// features section
//hidding Features section elements

features.forEach((ele) => {
  if (ele.classList.contains("quality")) {
    ele.style.cssText = "transform: translate(-300px , 300px); opacity:0;";
  }
  if (ele.classList.contains("time")) {
    ele.style.cssText = "transform: translatey(300px); opacity:0;";
  }
  if (ele.classList.contains("passion")) {
    ele.style.cssText = "transform: translate(300px , 300px); opacity:0;";
  }
});
//
//
// TESTIMONIALS section
let testimonials = document.querySelector(".testimonials");
let cards = document.querySelectorAll(".testimonials .box");
let testimonialsAnimation = true;
testimonials.style.overflow = "hidden";
// testimonials section
// hidding testimonials section elements
cards.forEach((ele) => {
  ele.style.cssText = "transform: translatex(700px); opacity:0;";
});
//
//
// Team section
let teamSection = document.querySelector(".team");
let teamMembers = document.querySelectorAll(".team .box");
let teamAnimation = true;
// team section animation
// hidding team section elements
teamMembers.forEach((memeber) => {
  memeber.style.cssText = "transform: translatex(700px); opacity:0;";
});
//
//
// services section
let servicesSection = document.querySelector(".services");
let servicesContainer = document.querySelector(".services .container");
servicesContainer.style.cssText = "perspective:800px; overflow:hidden;";
let services = document.querySelectorAll(".services .box");
services.forEach((ele) => {
  ele.style.cssText = "opacity:0;transform:translate3d(50px, 50px, -500px)";
});
let servicesAnimation = true;

//
//
// skills section
let skillsSection = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".skills .skill .progress span");
let skillsAnimation = true;
//
//
// how it  wroks section
let howItWorkSection = document.querySelector(".work-steps");
let workingSteps = document.querySelectorAll(".work-steps .info .box");
let hitwContainer = document.querySelector(".work-steps .container");
hitwContainer.style.cssText = "perspective:800px; overflow:hidden;";
workingSteps.forEach((ele) => {
  ele.style.cssText = "opacity:0;transform:translate3d(50px, 50px, -900px)";
});
let hitwAnimation = true;
//
//
// event section
let days = document.querySelector(".events .info .days");
let hours = document.querySelector(".events .info .hours");
let minutes = document.querySelector(".events .info .minutes");
let seconds = document.querySelector(".events .info .seconds");

let contDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let conterDate = setInterval(() => {
  // get current date
  let currentDate = new Date().getTime();
  // get the date defferance between current day and contDownDate
  let dateDiff = contDownDate - currentDate;
  // set dayus
  let remaindDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  days.textContent = remaindDays < 10 ? `0${remaindDays}` : remaindDays;
  // set hours
  let remaindHours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hours.textContent = remaindHours < 10 ? `0${remaindHours}` : remaindHours;
  // set minutes
  let remaindMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  minutes.textContent =
    remaindMinutes < 10 ? `0${remaindMinutes}` : remaindMinutes;
  // set seconds
  let remaindSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  seconds.textContent =
    remaindSeconds < 10 ? `0${remaindSeconds}` : remaindSeconds;
}, 1000);
console.log(contDownDate);
//
//
// pricing section
let plansSection = document.querySelector(".pricing");
let plans = document.querySelectorAll(".pricing .box");
let planAnmation = true;
plansSection.style.overflow = "hidden";
// hidden Plans section elements
plans.forEach((plan) => {
  if (plan.children[0].children[0].classList.contains("book-mark")) {
    plan.style.cssText = "transform: translatey(300px); opacity:0;";
  } else if (plan.children[0].children[0].textContent == "basic") {
    plan.style.cssText = "transform: translate(-300px,300px); opacity:0;;";
  } else {
    plan.style.cssText = "transform: translate(300px,300px); opacity:0;";
  }
});
//
//
// stats section
let stateSection = document.querySelector(".stats");
let conterSpans = document.querySelectorAll(".stats .box span:first-of-type");
function conter(ele) {
  let myGoal = ele.dataset.goal;
  let timer = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == myGoal) {
      if (ele.dataset.money) ele.textContent += "k";
      clearInterval(timer);
    }
  }, 10);
}
let started = false;
//
//
//

window.onscroll = function () {
  // article section Animation
  // scroll event to show elements of articles section
  if (window.scrollY >= articlesSection.offsetTop - 100 && articleAnimation) {
    for (let i = 0; i < articles.length; i++) {
      setTimeout(() => {
        articles[i].style.cssText = "transition: opacity 0.4s, transform 0.9s;";
      }, 100 * i);
    }
    articleAnimation = false;
  }
  // gallary section Animation
  if (window.scrollY >= gallarySection.offsetTop - 50 && gallaryAnimation) {
    for (let i = 0; i < gallaryItems.length; i++) {
      setTimeout(() => {
        gallaryItems[i].style.cssText = "";
      }, 100 * i);
    }
    gallaryAnimation = false;
  }
  // features section Animation
  features.forEach((ele) => {
    if (window.scrollY >= ele.offsetTop - 290) {
      ele.style.cssText = "transition: opacity 0.4s, transform 0.9s;";
    }
  });
  // testimonials section animation
  if (window.scrollY >= testimonials.offsetTop - 50 && testimonialsAnimation) {
    for (let i = 0; i < cards.length; i++) {
      setTimeout(() => {
        cards[i].style.cssText = "";
      }, 150 * i);
      testimonialsAnimation = false;
    }
  }
  // team Members section animation
  if (window.scrollY >= teamSection.offsetTop - 50 && teamAnimation) {
    for (let i = 0; i < teamMembers.length; i++) {
      setTimeout(() => {
        teamMembers[i].style.cssText =
          "transition: opacity 0.4s, transform 0.9s; animation: tilt-shaking 0.2s 0.5s 5;";
      }, i * 150);

      teamAnimation = false;
    }
  }
  // services Section animation
  if (window.scrollY >= servicesSection.offsetTop - 50 && servicesAnimation) {
    for (let i = 0; i < services.length; i++) {
      setTimeout(() => {
        services[i].style.cssText = "";
      }, 100 * i);
    }
    servicesAnimation = false;
  }
  // how it work section Animation
  if (window.scrollY >= howItWorkSection.offsetTop - 50 && hitwAnimation) {
    for (let i = 0; i < workingSteps.length; i++) {
      setTimeout(() => {
        workingSteps[i].style.cssText = "";
      }, 100 * i);
    }
    hitwAnimation = false;
  }
  // plans section Animation
  plans.forEach((plan) => {
    if (-plansSection.getBoundingClientRect().y >= plan.offsetTop - 400) {
      plan.style.cssText = " ";
    }
    planAnmation = false;
  });
  // skill section animation
  if (window.scrollY >= skillsSection.offsetTop - 200 && skillsAnimation) {
    // skillsSection Animation
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
    skillsAnimation = false;
  }
  // stateSection Animation
  if (window.scrollY >= stateSection.offsetTop - 600) {
    if (!started) {
      conterSpans.forEach((ele) => {
        conter(ele);
      });
    }
    started = true;
  }
};
// scroll to top button
let btn = document.querySelector("button.scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 3000) {
    btn.style.display = " block";
  } else {
    btn.style.display = "none";
  }
});

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
