window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let images = document.querySelectorAll('.image');
    let offset = scrollTop * 0.5; //调整分开速度
    images[0].style.transform = `translateX(calc(-50% - ${offset * 0.9}px))`;
    images[1].style.transform = `translateX(calc(-50% + ${offset * 0.9}px))`;
    images[3].style.transform = `translateX(calc(-50% - ${offset * 1.8}px))`;
    images[4].style.transform = `translateX(calc(-50% + ${offset * 1.8}px))`;
});

