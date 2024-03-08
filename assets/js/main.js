import { hideMainBanner, splitDateAndTitle } from "./helpers";
import { pagination } from "./pagination";

$(document).ready(() => {
  splitDateAndTitle();
  hideMainBanner();
});

$(".menu-button").on("click", function() {
  let nav = $("div.menu"),
    link_pad = $("div.menu a").height();
  $(this).toggleClass("active");
  $("body").toggleClass("pmt");
  let menu_oheight = nav.outerHeight(),
    menu_iheight = $("div.menu a:last-child").position();
});

$(".js-toggleBanner").on("click", function() {
  let imageContainer = $(".js-mainImageContainer"),
    src = imageContainer.attr("src");

  imageContainer.toggleClass("js-isVisible is-visible");

  if (imageContainer.hasClass("js-isVisible")) {
    imageContainer.show();
    window.localStorage.setItem("mainImgSrc", "");
  } else {
    imageContainer.hide();
    window.localStorage.setItem("mainImgSrc", src);
  }
});

$("img")
  .parent("p")
  .addClass("picture");
$(".cite")
  .parent("p")
  .addClass("paragraph--has-cite");

(function() {
  const sources = [
    'iframe[src*="youtube.com"]',
    'iframe[src*="youtube-nocookie.com"]',
    'iframe[src*="player.vimeo.com"]',
    'iframe[src*="kickstarter.com"][src*="video.html"]',
    "object",
    "embed"
  ];

  reframe(document.querySelectorAll(sources.join(",")));
})();

(function() {
  if (
    !document.body.classList.contains("home-template") &&
    !document.body.classList.contains("post-template")
  ) {
    pagination();
  }
})();
