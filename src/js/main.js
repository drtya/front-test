// burger menu in header
const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".header_burger");
const mobileNav = document.querySelector(".header_mobile_nav");
burger.addEventListener("click", (e) => {
  if (overlay.style.display === "none" && mobileNav.style.display === "none") {
    overlay.style.display = "block";
    mobileNav.style.display = "flex";
  } else {
  }
});
overlay.addEventListener("click", () => {
  mobileNav.style.display = "none";
  overlay.style.display = "none";
});

// promo section slides

$("#promo_slide").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
});

$("#products_slide").owlCarousel({
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      center: true,
    },
    560: {
      items: 2,
    },
    993: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

const sponsorList = [
  "./src/assets/image/partners/aalamstroy.svg",
  "./src/assets/image/partners/actbuilding.svg",
  "./src/assets/image/partners/alphastroy.svg",
  "./src/assets/image/partners/altynkurulush.svg",
  "./src/assets/image/partners/avangardstyle.svg",
  "./src/assets/image/partners/bishkekkurulush.svg",
  "./src/assets/image/partners/bishkekpark.svg",
  "./src/assets/image/partners/dska.svg",
  "./src/assets/image/partners/ekspostroy.svg",
  "./src/assets/image/partners/elisabet.svg",
  "./src/assets/image/partners/kanatstroy.svg",
  "./src/assets/image/partners/kggroup.svg",
  "./src/assets/image/partners/nurimaratkurulush.svg",
  "./src/assets/image/partners/odonstroy.svg",
  "./src/assets/image/partners/optima.svg",
  "./src/assets/image/partners/progroup.svg",
];

// Sponsors grid tags generated
const sponsorsGrid = document.querySelector(".sponsors_grid");
sponsorList.map((el) => {
  const sponsorDiv = document.createElement("div");
  const image = document.createElement("img");
  sponsorDiv.append(image);
  sponsorDiv.style.display = "flex";
  sponsorDiv.style.alignItems = "center";
  sponsorDiv.style.justifyContent = "center";

  image.setAttribute("src", el);
  sponsorsGrid.append(sponsorDiv);
});

// Sponsor slide tags generated
const sponsorsSlide = document.getElementById("sponsors_slide");
sponsorList.map((el) => {
  const sponsorsSlideItem = document.createElement("div");
  const sponsorsSlideImage = document.createElement("img");
  sponsorsSlideItem.setAttribute("class", el);
  sponsorsSlideItem.style.width = "125px";
  sponsorsSlideItem.style.height = "75px";
  sponsorsSlideItem.style.background = "#fcfdff";
  sponsorsSlideItem.style.padding = "10px 24px";
  sponsorsSlideImage.setAttribute("src", el);
  sponsorsSlideImage.style.width = "100%";
  sponsorsSlideImage.style.height = "100%";
  sponsorsSlideImage.style.objectFit = "contain";
  sponsorsSlideItem.append(sponsorsSlideImage);
  sponsorsSlide.append(sponsorsSlideItem);
});
// Sponsor slide slider
$("#sponsors_slide").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  center: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 2,
    },
    520: {
      items: 3.5,
    },
    800: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },
});

//map
var map;

DG.then(function () {
  map = DG.map("map", {
    center: [42.864207, 74.551556],
    zoom: 13,
  });
  DG.marker([42.868149, 74.533853]).addTo(map).bindPopup('г. Бишкек, ул. Льва Толстого, 210');
  DG.marker([42.868924, 74.547248]).addTo(map).bindPopup('г. Бишкек, ул. Интергельпо, 1 ст 10');
});
