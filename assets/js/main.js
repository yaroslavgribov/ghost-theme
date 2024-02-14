import { pagination } from "./pagination";

$(".menu-button").on("click", function() {
  $(this).toggleClass("active");
  $("body").toggleClass("pmt");
});

$("img")
  .parent("p")
  .addClass("picture");

$(".cite")
  .parent("p")
  .addClass("paragraph--has-cite");

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

(function() {
  pagination();
})();
