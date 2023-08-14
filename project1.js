document.addEventListener('DOMContentLoaded', function () {
    const windowHeight = window.innerHeight;
    const paragraph = document.querySelector(".overview-para");
    const paragraph1 = document.querySelector(".signin-intro-para");
    const paragraph2 = document.querySelector(".balance-intro-para");

    const paragraph3 = document.querySelector(".video-intro-para");
    const paragraph31 = document.querySelector(".video-intro-para1");
    const paragraph32 = document.querySelector(".video-intro-para2");
    const paragraph33 = document.querySelector(".video-intro-para3");

    const paragraph4 = document.querySelector(".challenge-para");
    const paragraph5 = document.querySelector(".solution-para");
    const paragraph6 = document.querySelector(".solution-para1");

    const paragraph7 = document.querySelector(".cal-intro-para");
    const paragraph71 = document.querySelector(".cal-intro-para1");
    const paragraph72 = document.querySelector(".cal-intro-para2");

    const paragraph8 = document.querySelector(".map-intro-para");
    const paragraph81 = document.querySelector(".map-intro-para1");
    const paragraph82 = document.querySelector(".map-intro-para2");

    const paragraph9 = document.querySelector(".find-intro-para");
    const paragraph91 = document.querySelector(".find-intro-para1");

    const paragraph10 = document.querySelector(".mode-intro-para");
    const paragraph101 = document.querySelector(".mode-intro-para1");




    function overview() {
        let scrollTop = window.scrollY;
        let images = document.querySelectorAll('.image');
        let offset = scrollTop * 0.5; //调整分开速度
        if (scrollTop < windowHeight * 0.8) {
            images[0].style.transform = `translateX(calc(-50% - ${offset * 0.9}px))`;
            images[4].style.transform = `translateX(calc(-50% + ${offset * 1.8}px))`;
            images[1].style.transform = `translateX(calc(-50% + ${offset * 0.9}px))`;
            images[3].style.transform = `translateX(calc(-50% - ${offset * 1.8}px))`;
        }
    }


    function fadeInOnScroll() {
        const paragraphOffset = paragraph.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph.classList.add("overview-para-visible");
        } else {
            paragraph.classList.remove("overview-para-visible"); // Remove the class if the element is not in view
        }
    }


    function loginFadeInOnScroll() {
        const paragraphOffset = paragraph1.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph1.classList.add("signin-intro-para-visible");
        } else {
            paragraph1.classList.remove("signin-intro-para-visible"); // Remove the class if the element is not in view
        }
    }


    function balanceFadeInOnScroll() {
        const paragraphOffset = paragraph2.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph2.classList.add("balance-intro-para-visible");
        } else {
            paragraph2.classList.remove("balance-intro-para-visible"); // Remove the class if the element is not in view
        }
    }

    function videoFadeInOnScroll() {
        const paragraphOffset = paragraph3.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph3.classList.add("video-intro-para-visible");
            paragraph31.classList.add("video-intro-para1-visible");
            paragraph32.classList.add("video-intro-para2-visible");
            paragraph33.classList.add("video-intro-para3-visible");
        } else {
            paragraph3.classList.remove("video-intro-para-visible");
            paragraph31.classList.remove("video-intro-para1-visible");
            paragraph32.classList.remove("video-intro-para2-visible");
            paragraph33.classList.remove("video-intro-para3-visible"); // Remove the class if the element is not in view
        }
    }

    function calFadeInOnScroll() {
        const paragraphOffset = paragraph7.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph7.classList.add("cal-intro-para-visible");
            paragraph71.classList.add("cal-intro-para1-visible");
            paragraph72.classList.add("cal-intro-para2-visible");
        } else {
            paragraph7.classList.remove("cal-intro-para-visible");
            paragraph71.classList.remove("cal-intro-para1-visible");
            paragraph72.classList.remove("cal-intro-para2-visible"); // Remove the class if the element is not in view
        }
    }


    function mapFadeInOnScroll() {
        const paragraphOffset = paragraph8.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph8.classList.add("map-intro-para-visible");
            paragraph81.classList.add("map-intro-para1-visible");
            paragraph82.classList.add("map-intro-para2-visible");
        } else {
            paragraph8.classList.remove("map-intro-para-visible");
            paragraph81.classList.remove("map-intro-para1-visible");
            paragraph82.classList.remove("map-intro-para2-visible"); // Remove the class if the element is not in view
        }
    }

    function findFadeInOnScroll() {
        const paragraphOffset = paragraph9.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph9.classList.add("find-intro-para-visible");
            paragraph91.classList.add("find-intro-para1-visible");
        } else {
            paragraph9.classList.remove("find-intro-para-visible");
            paragraph91.classList.remove("find-intro-para1-visible");
        }
    }

    function modeFadeInOnScroll() {
        const paragraphOffset = paragraph10.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph10.classList.add("mode-intro-para-visible");
            paragraph101.classList.add("mode-intro-para1-visible");
        } else {
            paragraph10.classList.remove("mode-intro-para-visible");
            paragraph101.classList.remove("mode-intro-para1-visible");
        }
    }


    function challengeFadeInOnScroll() {
        const paragraphOffset = paragraph4.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph4.classList.add("challenge-para-visible");
        } else {
            paragraph4.classList.remove("challenge-para-visible"); // Remove the class if the element is not in view
        }
    }

    function solutionFadeInOnScroll() {
        const paragraphOffset = paragraph5.getBoundingClientRect().top;

        if (paragraphOffset < windowHeight) {
            paragraph5.classList.add("solution-para-visible");
            paragraph6.classList.add("solution-para1-visible");
        } else {
            paragraph5.classList.remove("solution-para-visible");
            paragraph6.classList.remove("solution-para1-visible"); // Remove the class if the element is not in view
        }
    }


    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('scroll', loginFadeInOnScroll);
    window.addEventListener('scroll', balanceFadeInOnScroll);
    window.addEventListener('scroll', videoFadeInOnScroll);
    window.addEventListener('scroll', calFadeInOnScroll);
    window.addEventListener('scroll', mapFadeInOnScroll);
    window.addEventListener('scroll', findFadeInOnScroll);
    window.addEventListener('scroll', modeFadeInOnScroll);

    window.addEventListener('scroll', challengeFadeInOnScroll);
    window.addEventListener('scroll', solutionFadeInOnScroll);
    window.addEventListener('scroll', overview);
});

