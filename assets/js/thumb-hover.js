document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img.hover-thumb').forEach(function (img) {
    var normalSrc = img.getAttribute('data-thumb');
    var altSrc = img.getAttribute('data-thumb-alt');
    if (!altSrc) return; // skip if no alt

    img.addEventListener('mouseenter', function () {
      img.src = altSrc;
    });
    img.addEventListener('mouseleave', function () {
      img.src = normalSrc;
    });
    // Also handle tap on mobile for accessibility
    img.addEventListener('touchstart', function () {
      img.src = altSrc;
    });
    img.addEventListener('touchend', function () {
      img.src = normalSrc;
    });
  });
});
