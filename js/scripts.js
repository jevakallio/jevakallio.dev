var baseHue = +getComputedStyle(document.documentElement).getPropertyValue(
  "--primary-hue"
);

window.addEventListener("scroll", function() {
  requestAnimationFrame(function() {
    const progress = window.scrollY; // window.document.body.clientHeight;
    setPrimaryColorBasedOnScrollPosition(progress);
  });
});

function setPrimaryColorBasedOnScrollPosition(progress) {
  document.documentElement.style.setProperty(
    "--primary-hue",
    baseHue + progress / 30
  );
}
