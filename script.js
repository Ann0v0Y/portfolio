let scrollCounter = 0;

document.addEventListener('DOMContentLoaded', function () {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const portrait = document.querySelector('.portrait');
  const windowHeight = window.innerHeight;

  const paragraph = document.querySelector(".fade-in-para");
  const title = document.querySelector(".para-title");




  function checkFade() {
    const line1Top = line1.getBoundingClientRect().top;
    const line1Bottom = line1.getBoundingClientRect().bottom;
    const line2Top = line2.getBoundingClientRect().top;
    const line2Bottom = line2.getBoundingClientRect().bottom;
    const portraitTop = line2.getBoundingClientRect().top;
    const portraitBottom = line2.getBoundingClientRect().bottom;

    const line1Visibility = (line1Top >= 0) && (line1Bottom <= windowHeight);
    const line2Visibility = (line2Top >= 0) && (line2Bottom <= windowHeight);
    const portraitVisibility = (portraitTop >= 0) && (portraitBottom <= windowHeight);

    if (line1Visibility) {
      const opacity = (line1Bottom / windowHeight);
      line1.style.opacity = opacity;
    } else if ((line1Top / windowHeight) < 0.3) {
      opacity = 1;
    } else {
      line1.style.opacity = 0;
    }

    if (line2Visibility) {
      const opacity = (line2Bottom / windowHeight);
      line2.style.opacity = opacity;
    } else {
      line2.style.opacity = 0;
    }

    if (portraitVisibility) {
      const opacity = (portraitBottom / windowHeight);
      portrait.style.opacity = opacity;
    } else {
      portrait.style.opacity = 0;
    }
  }

  function showImage() {
    portrait.style.zIndex = 2;
    line1.classList.add('fade-out');
    line2.classList.add('fade-out');
    // line1.style.opacity = 0.5;
    // line2.style.opacity = 0.5;
  }

  function hideImage() {
    portrait.style.zIndex = 1;
    line1.classList.remove('fade-out');
    line2.classList.remove('fade-out');
  }

  function fadeInOnScroll() {
    const windowHeight = window.innerHeight;
    const paragraphOffset = paragraph.getBoundingClientRect().top;

    if (paragraphOffset < windowHeight) {
      paragraph.classList.add("fade-in-para-visible");
    } else {
      paragraph.classList.remove("fade-in-para-visible"); // Remove the class if the element is not in view
    }
  }

  function fadeInOnScrollTitle() {
    const windowHeight = window.innerHeight;
    const paragraphOffset = paragraph.getBoundingClientRect().top;

    if (paragraphOffset < windowHeight) {
      title.classList.add("fade-in-title-visible");
    } else {
      title.classList.remove("fade-in-title-visible"); // Remove the class if the element is not in view
    }
  }



  window.addEventListener('scroll', checkFade);
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('scroll', fadeInOnScrollTitle);
});




