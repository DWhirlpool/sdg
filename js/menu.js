/* Theme Name: Bizzcane - Business Templates
   Author: Shreethemes
   Version: 1.0.0
   Created: May 2019
   File Description:Main JS file of the template
*/

(function ($) {
    'use strict';
    // Navbat Toggle
    var scroll = $(window).scrollTop();

    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-4).addClass('last-elements');

    $('.menu-arrow, .submenu-arrow').on('click', function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });
    
    $(".navigation-menu a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
        }
    });
})(jQuery) 