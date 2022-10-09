const hb = document.querySelector(".header-bottom");
const showMore = document.querySelector(".btn-show-more-np");
const listProducts = document.querySelector(".np-list");
const fcImg = document.querySelectorAll(".fc-img");
const fcTitle = document.querySelectorAll(".fc-title");
const fcDesc = document.querySelectorAll(".fc-desc");
const fcPrice = document.querySelectorAll(".fc-price");
const ctPrev = document.querySelector("#ct-prev");
const ctNext = document.querySelector("#ct-next");
const ctItem = document.querySelectorAll(".ct-slider-item");
const ctDot1 = document.querySelector(".ct-dot-1");
const ctDot2 = document.querySelector(".ct-dot-2");
const fpItem = document.querySelectorAll(".fp-item");
const fpPrev = document.querySelector("#fp-prev");
const fpNext = document.querySelector("#fp-next");
const fpDot = document.querySelectorAll(".fp-dot");
const language = document.querySelector(".language");
const languageBox = document.querySelector(".language-box");
const r = document.querySelector(".right");
const rsm = document.querySelector(".rsm");
const closeRight = document.querySelector(".close-right");
const showRight = document.querySelector(".show-right");
const fth = document.querySelectorAll(".fth");
const ddf = document.querySelectorAll(".ddf");
const showSB = document.querySelector(".show-sb");
const closeSB = document.querySelector(".close-sb");
const sidebar = document.querySelector(".sidebar");
const wrapper = document.querySelector(".wrapper");
const lgsb = document.querySelector(".language-sb");
const sbot = document.querySelector(".sbot");
const sbih = document.querySelectorAll(".sbi-heading");
const sisb = document.querySelectorAll(".sisb");
const sbi = document.querySelectorAll(".sbi");

for (let i = 0; i < 4; i++) {
  fcImg[i].addEventListener("mouseover", overFcTitle);
  fcImg[i].addEventListener("mouseout", outFcTitle);
  fcTitle[i].addEventListener("mouseover", overFcTitle);
  fcTitle[i].addEventListener("mouseout", outFcTitle);
  fcDesc[i].addEventListener("mouseover", overFcTitle);
  fcDesc[i].addEventListener("mouseout", outFcTitle);
  fcPrice[i].addEventListener("mouseover", overFcTitle);
  fcPrice[i].addEventListener("mouseout", outFcTitle);
  function overFcTitle() {
    fcTitle[i].style.color = "#307058";
  }
  function outFcTitle() {
    fcTitle[i].style.color = "#000";
  }
}

$(document).ready(function () {
  $(".header-top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    prevArrow:
      "<button type='button' class='ht-prev ht-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='ht-next ht-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

$(document).ready(function () {
  $(".r-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 700,
    cssEase: "ease",
    prevArrow:
      "<button type='button' class='r-slick-prev r-slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='r-slick-next r-slick-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".ct-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    speed: 700,
    cssEase: "ease",
    prevArrow:
      "<button type='button' class='ct-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='ct-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".fp-list").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: true,
    speed: 700,
    cssEase: "ease",
    prevArrow:
      "<button type='button' id='fp-prev' class='r-slick-arrow r-slick-prev fp-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' id='fp-next' class='r-slick-arrow r-slick-next fp-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".brand-list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 700,
    cssEase: "ease",
    prevArrow:
      "<button type='button' id='br-prev' class='r-slick-arrow r-slick-prev br-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' id='br-next' class='r-slick-arrow r-slick-next br-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    document.querySelector(".header-top").style.marginTop = "-45px";
    document.querySelector(".sidebar").style.marginTop = "45px";
  } else {
    document.querySelector(".header-top").style.marginTop = "0";
    document.querySelector(".sidebar").style.marginTop = "0";
  }
  if (document.documentElement.scrollTop > 200) {
    document.querySelector(".cart-pop").style.marginBottom = "0";
    document.querySelector(".back-to-top").style.marginTop = "0";
    document.querySelector(".cart-pop").style.opacity = "1";
    document.querySelector(".back-to-top").style.opacity = "1";
  } else {
    document.querySelector(".cart-pop").style.marginBottom = "-80px";
    document.querySelector(".back-to-top").style.marginTop = "-50px";
    document.querySelector(".cart-pop").style.opacity = "0";
    document.querySelector(".back-to-top").style.opacity = "0";
  }
}

let lgCheck = false;
language.addEventListener("click", function () {
  if (lgCheck == false) {
    languageBox.style.display = "block";
    lgCheck = true;
  } else {
    languageBox.style.display = "none";
    lgCheck = false;
  }
});

closeRight.addEventListener("click", function () {
  r.style.right = "-150px";
  rsm.style.right = "1vw";
});
showRight.addEventListener("click", function () {
  r.style.right = "2.5vw";
  rsm.style.right = "-60px";
});

var btt = $(".btt");
btt.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
});

for (let i = 0; i < 3; i++) {
  fth[i].addEventListener("click", function () {
    if (ddf[i].style.display != "block") ddf[i].style.display = "block";
    else ddf[i].style.display = "none";
  });
}

showSB.addEventListener("click", function () {
  sidebar.style.marginLeft = "0";
  sidebar.style.opacity = "1";
  wrapper.style.background = "rgba(0, 0, 0, 0.8)";
  wrapper.style.filter = "brightness(20%)";
});
closeSB.addEventListener("click", function () {
  sidebar.style.marginLeft = "-400px";
  sidebar.style.opacity = "0";
  wrapper.style.filter = "brightness(100%)";
  wrapper.style.background = "rgba(0, 0, 0, 0)";
  lgsb.style.opacity = "1";
  sbot.style.opacity = "1";
  closeSbi();
});

for (let i = 0; i < 5; i++) {
  sisb[i].addEventListener("click", function () {
    sbi[i].style.marginLeft = "0";
    sbi[i].style.opacity = "1";
    lgsb.style.opacity = "0";
    sbot.style.opacity = "0";
  });
}
function closeSbi() {
  sbi[0].style.marginLeft = "-400px";
  sbi[0].style.opacity = "0";
  sbi[1].style.marginLeft = "-400px";
  sbi[1].style.opacity = "0";
  sbi[2].style.marginLeft = "-400px";
  sbi[2].style.opacity = "0";
  sbi[3].style.marginLeft = "-400px";
  sbi[3].style.opacity = "0";
  sbi[4].style.marginLeft = "-400px";
  sbi[4].style.opacity = "0";
}
for (let i = 0; i < 5; i++) {
  sbih[i].addEventListener("click", function () {
    sbi[i].style.marginLeft = "-400px";
    sbi[i].style.opacity = "0";
    lgsb.style.opacity = "1";
    sbot.style.opacity = "1";
  });
}
