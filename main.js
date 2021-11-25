const header = $('#fixed');

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        header.addClass('headerFixed');
    } else {
        header.removeClass('headerFixed');
    }
});