(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector("[data-nav-links]");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var whyButtons = Array.prototype.slice.call(document.querySelectorAll(".why-item"));
  var whyImages = Array.prototype.slice.call(document.querySelectorAll(".why-media img"));
  var whySection = document.querySelector("[data-why-section]");
  var whyIndex = 0;
  var whyTimer = null;
  var whyPaused = false;

  function setWhy(index) {
    whyIndex = index;
    whyButtons.forEach(function (button, buttonIndex) {
      button.classList.toggle("active", buttonIndex === index);
    });
    whyImages.forEach(function (image, imageIndex) {
      image.classList.toggle("active", imageIndex === index);
    });
  }

  function nextWhy() {
    if (!whyButtons.length) return;
    setWhy((whyIndex + 1) % whyButtons.length);
  }

  function startWhyCycle() {
    if (!whyButtons.length || whyTimer || whyPaused) return;
    whyTimer = window.setInterval(nextWhy, 4000);
  }

  function stopWhyCycle() {
    if (!whyTimer) return;
    window.clearInterval(whyTimer);
    whyTimer = null;
  }

  whyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setWhy(Number(button.dataset.why || 0));
      stopWhyCycle();
      startWhyCycle();
    });
  });

  if (whySection && whyButtons.length) {
    whySection.addEventListener("mouseenter", function () {
      whyPaused = true;
      stopWhyCycle();
    });
    whySection.addEventListener("mouseleave", function () {
      whyPaused = false;
      startWhyCycle();
    });
    whySection.addEventListener("focusin", function () {
      whyPaused = true;
      stopWhyCycle();
    });
    whySection.addEventListener("focusout", function () {
      whyPaused = false;
      startWhyCycle();
    });
    startWhyCycle();
  }

})();
