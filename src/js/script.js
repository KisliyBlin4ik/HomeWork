$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});
//https://www.youtube.com/watch?v=chJQofBSx94
//скрипт из ролика

$( '.header__link' ).on("click", function(){//при клике на ссылку в бургер меню, закрывает его
    $('.header__burger').click();
  });


//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
//подключть для работы скрипта jquery





//настройка для swiper
new Swiper('.swiper', {
    pagination: {//точечки под слайдами
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
        //увеличение выбранного кружка слайда
    },
    slidesPerView: 1,//кол-во слайдов за раз на экране
    loop: true,//бесконечная прокрутка
    initialSlide: 1,//Индексный номер начального слайда.
     // autoHeight: true,
    // centeredSlides: true,
    // slidesPerGroup: 2,
    // spaceBetween: 1,
    // roundLengths: true,
    // pagebeforeshow: 3,
    // centerInsufficientSlides: true,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    // centeredSlides: true,
    // roundLengths: true,
});


   