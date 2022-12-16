// btn menu

function showMenu() {
    const btn1 = document.querySelector('.top__btn');
    const menu1 = document.querySelector('.nav');

    btn1.addEventListener('click', function () {
        if (menu1.classList.contains('active') && btn1.classList.contains('active')) {
            menu1.classList.remove('active');
            btn1.classList.remove('active');
        } else {
            menu1.classList.add('active');
            btn1.classList.add('active');
        }
    })
}
showMenu();


// show sub menu
function subMenu() {
    const btn2 = document.querySelector('.nav__dir');
    const sub = document.querySelector('.sub');
    const exit = document.querySelector('.nav__exi');

    btn2.addEventListener('click', function () {
        sub.style.visibility = "visible";
        exit.style.display = "block";
        btn2.style.display = "none";
    });
    exit.addEventListener('click', function () {
        sub.style.visibility = "hidden";
        exit.style.display = "none";
        btn2.style.display = "block";
    });
}
subMenu();


// swiper
function swiperOne() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
swiperOne();
