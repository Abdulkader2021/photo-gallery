/** *************Main JS*********************

 TABLE OF CONTENTS
 ---------------------------
 1.encoder function
 ** ***************************************/

"use strict";
const feather = require('feather-icons');

/*****Ready function start*****/
$(document).ready(function () {
    encoder();

    /*Disabled*/
    $(document).on("click", "a.disabled,a:disabled", function (e) {
        return false;
    });
});
/*****Ready function end*****/

/*Variables*/
var height,
    width,
    $wrapper = $(".encoder-wrapper"),
    $nav = $(".encoder-nav"),
    $vertnaltNav = $(".encoder-wrapper.encoder-vertical-nav"),
    $horizontalNav = $(".encoder-wrapper"),
    $navbar = $(".encoder-navbar");

/***** encoder function start *****/
var encoder = function () {
    /*Feather Icon*/
    var featherIcon = $(".feather-icon");
    if (featherIcon.length > 0) {
        feather.replace();
    }

    /*Navbar Toggle*/
    $(document).on("click", "#navbar_toggle_btn", function (e) {
        $wrapper.toggleClass("encoder-nav-toggle");
        $(window).trigger("resize");
        return false;
    });
    $(document).on(
        "click",
        "#encoder_nav_backdrop,#encoder_nav_close",
        function (e) {
            $wrapper.removeClass("encoder-nav-toggle");
            return false;
        }
    );

    /*Search form Collapse*/
    $(document).on("click", "#navbar_search_btn", function (e) {
        $("html,body").animate({ scrollTop: 0 }, "slow");
        $(".navbar-search input").focus();
        $wrapper.addClass("navbar-search-toggle");
        $(window).trigger("resize");
    });
    $(document).on("click", "#navbar_search_close", function (e) {
        $wrapper.removeClass("navbar-search-toggle");
        $(window).trigger("resize");
        return false;
    });

};

$(window).trigger("resize");
/***** Resize function end *****/
