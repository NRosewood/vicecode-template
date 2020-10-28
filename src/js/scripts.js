$(document).scroll(function () {
    svg4everybody()
})

$(document).ready(function(){
    $('.header, footer, .main__tags').on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({scrollTop: top}, 1500)
    })
})

$(document).scroll(function () {
    let scroll_status = $(document).scrollTop()
    
    if (scroll_status > $('.header').height()) {
      $('.header').addClass('header--float')
    }
    else {
      $('.header').removeClass('header--float')
    }
})

$('.menu').on('click', (e) => {
    e.preventDefault();
    
    $('.menu__default, .menu__active').toggleClass('is-hidden')
    $('.navigation').toggleClass('is-visible')
})

$('.navigation__link').on('click', (e) => {
    e.preventDefault();
    
    $('.menu__default, .menu__active').toggleClass('is-hidden')
    $('.navigation').toggleClass('is-visible')
})

$('.header__item--phone').on('click', () => {
    $('.phone-content').toggleClass('is-hidden')
    $('.dropdown').addClass('is-hidden')
})

$('.header__item--dropdown').on('click', () => {
    $('.dropdown').toggleClass('is-hidden')
    $('.phone-content').addClass('is-hidden')
})

$('.dropdown__link').on('click', (e) => {
    $(e.currentTarget).addClass('dropdown__link--active').siblings().removeClass('dropdown__link--active');
})