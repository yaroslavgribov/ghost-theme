import { pagination } from "./pagination";

(function() {
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", function() {
    menuButton.classList.toggle("active");
    document.body.classList.toggle("pmt");
  });

  const imgs = document.querySelectorAll("img");

  for (const img of imgs) {
    if (img.parentElement.tagName === Node.ELEMENT_NODE) {
      img.parentElement.classList.add("picture");
    }
  }

  const cites = document.querySelectorAll(".cite");

  for (const cite of cites) {
    if (cite.parentElement.nodeType === Node.ELEMENT_NODE) {
      cite.parentElement.classList.add("paragraph--has-cite");
    }
  }
})();

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
