'use strict';
window.$.sidebarMenu = function (menu) {
    var animationSpeed = 300,
        subMenuSelector = '.sidebar-submenu';
    window.jQuery(menu).on('click', 'li a', function (e) {
        var $this = window.jq(this);
        var checkElement = $this.next();
        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent('li').removeClass('active');
        } else if (
            checkElement.is(subMenuSelector) &&
            !checkElement.is(':visible')
        ) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('menu-open');
            var parent_li = $this.parent('li');
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
        }
    });
};

window.$.sidebarMenu('.sidebar-menu');
// $(".mobile-sidebar .switch-state").click(function(){
//   $(".page-body-wrapper").toggleClass("sidebar-close");
// });
