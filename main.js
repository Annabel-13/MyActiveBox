const header = $('#fixed');
const logo = $('#logoJS');
const nav = $('#navJS');


/*fixed header*/

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        header.addClass('headerFixed');
    } else {
        header.removeClass('headerFixed');
    }
}); /* / fixed header*/


/*open nav with 376px screen*/
logo.on('click', function () {

        nav.toggleClass('navVisible');



});/* / open nav with 376px screen*/

