import { dropdown } from "./dropdown";
import { pagination } from "./pagination";

(function() {
  $(".menu-button").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("pmt");
  });

  $("img")
    .parent("p")
    .addClass("picture");
})();

(function() {
  const navigation = document.querySelector(".navigation");
  const burger = navigation.querySelector(".burger");
  if (!burger) return;

  burger.addEventListener("click", function() {
    if (!navigation.classList.contains("is-open")) {
      navigation.classList.add("is-open");
    } else {
      navigation.classList.remove("is-open");
    }
  });
})();

/* Responsive video in post content */
(function() {
  const sources = [
    '.gh-content iframe[src*="youtube.com"]',
    '.gh-content iframe[src*="youtube-nocookie.com"]',
    '.gh-content iframe[src*="player.vimeo.com"]',
    '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
    ".gh-content object",
    ".gh-content embed"
  ];
  reframe(document.querySelectorAll(sources.join(",")));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
(function() {
  dropdown();
})();

(function() {
  if (
    !document.body.classList.contains("home-template") &&
    !document.body.classList.contains("post-template")
  ) {
    pagination();
  }
})();
