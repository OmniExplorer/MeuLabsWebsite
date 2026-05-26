(function () {
  function trimProjectShowcase() {
    var headings = Array.prototype.slice.call(document.querySelectorAll("h2"));
    var heading = headings.find(function (item) {
      return item.textContent.trim() === "See what your child will build at Meu Labs.";
    });

    if (!heading) return;

    var section = heading.closest("section");
    if (!section) return;

    var cards = section.querySelectorAll('a[href^="/courses/"]');
    cards.forEach(function (card, index) {
      var wrapper = card.parentElement;
      if (!wrapper) return;
      wrapper.style.display = index < 5 ? "" : "none";
    });
  }

  function enhanceLearningJourneyCourses() {
    var stages = Array.prototype.slice.call(document.querySelectorAll("h3")).filter(function (heading) {
      return ["Foundations", "Learning Paths", "Specializations", "Launchpad"].indexOf(heading.textContent.trim()) !== -1;
    });

    stages.forEach(function (heading) {
      var stageCard = heading.closest(".group") || heading.closest("[class*='rounded']");
      if (!stageCard || stageCard.dataset.courseUiEnhanced === "true") return;

      var links = Array.prototype.slice.call(stageCard.querySelectorAll("a")).filter(function (link) {
        return link.textContent.trim() && !/Preview|Explore|Click Here/i.test(link.textContent);
      });

      links.forEach(function (link) {
        var label = link.textContent.trim();
        if (!label || link.classList.contains("meu-course-chip")) return;

        link.classList.add("meu-course-chip");
        link.innerHTML = '<span class="meu-course-chip__icon">Course</span><span class="meu-course-chip__label">' + label + '</span><span class="meu-course-chip__arrow">›</span>';
      });

      if (links.length) stageCard.dataset.courseUiEnhanced = "true";
    });
  }

  function updateHero() {
    var hero = document.querySelector("main > section");
    if (!hero) return;

    var kickerWrap = hero.querySelector(".border-l-4.border-orange");
    var kicker = kickerWrap && kickerWrap.querySelector("p");
    var title = hero.querySelector("h1");

    if (!kickerWrap || !kicker || !title || title.querySelector(".robotics-word")) return;

    kickerWrap.classList.add("meu-hero-kicker");
    kicker.textContent = "Where students discover their passion and build real world tools and skills";

    title.classList.add("meu-hero-title");
    title.innerHTML = [
      '<span class="title-line">Sri Lanka&apos;s Best</span>',
      '<span class="title-line"><span class="robotics-word">Robotics</span> &amp; <span class="coding-word">Coding</span></span>',
      '<span class="title-line"><span class="meu-stem-tiles" aria-label="STEM"><span>S</span><span>T</span><span>E</span><span>M</span></span> Courses</span>',
      '<span class="title-line">for <span class="kids-word">Kids</span></span>'
    ].join("");

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      updateHero();
      trimProjectShowcase();
      enhanceLearningJourneyCourses();
    });
  } else {
    updateHero();
    trimProjectShowcase();
    enhanceLearningJourneyCourses();
  }

  window.addEventListener("load", function () {
    updateHero();
    trimProjectShowcase();
    enhanceLearningJourneyCourses();
  });

  setTimeout(function () {
    updateHero();
    trimProjectShowcase();
    enhanceLearningJourneyCourses();
  }, 300);
})();
