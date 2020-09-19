(function($) {
    'use strict';

    jQuery(document).ready(function($) {
        /* MOBILE DETECTION */
        var is_mobile = /Mobile|Android|iPhone|iPod|BlackBerry|Windows Phone/i.test(
            navigator.userAgent || navigator.vendor || window.opera
        );

        /* BROWSER WINDOW DETECTION */
        var browser_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var browser_height = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );

        if (browser_width > 767) {
            var top_offset = $('.header-fixed').height() + $('.main-category-box').height();
        } else {
            var top_offset = $('.header-fixed').height();
        }

        // Smooth Scrolling
        $('a.smooth-scrolling[href*="#"]:not([href="#"])').click(function() {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top - top_offset
                        },
                        1000
                    );
                    return false;
                }
            }
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.scroll-to-top').addClass('active');
                //$('.header-area').addClass('fixed');
            } else {
                $('.scroll-to-top').removeClass('active');
                //$('.header-area').removeClass('fixed');
            }

            if ($('.all-products-area').length > 0) {
                if (
                    $(window).scrollTop() + $('.header-fixed').height() >
                        $('.all-products-area').offset().top &&
                    $(window).scrollTop() +
                        $('.header-fixed').height() +
                        $('.product-menu-fixed-area').height() <
                        $('.all-products-area').offset().top +
                            $('.all-products-area').height() -
                            100
                ) {
                    $('.product-menu-fixed-area').addClass('fixed');
                } else {
                    $('.product-menu-fixed-area').removeClass('fixed');
                }
            }
        });

        $(document).on('click', '.scroll-to-top', function() {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        $(document).on('click', '.menu-bar-button', function() {
            $('.mobile-menu').removeClass('active');
            $('.mobile-menu').addClass('active');
        });

        $(document).on('click', '.mobile-category-mega-menu-button', function() {
            $('.mobile-category').removeClass('active');
            $('.mobile-menu').removeClass('active');
            $('.mobile-category').addClass('active');
        });

        $(document).on(
            'click',
            '.drawer-menu-backdrop, .drawer-menu-close, .mobile-main-menu ul li a',
            function() {
                $('.drawer-menu-area').removeClass('active');
            }
        );

        //Grid Or List View
        $(document).on('click', '.product-list-grid-option-select', function() {
            console.log('clicked');
            $('.product-list-area .row').toggleClass('product-list-view');
            $('.product-list-grid-option-select').removeClass('active');
            $(this).addClass('active');
        });
        //megamenu
        // jQuery(document).ready(function() {
        //     $('.dropdown').click(
        //         function() {
        //             $('.dropdown-menu', this).fadeIn('fast');
        //         },
        //         function() {
        //             $('.dropdown-menu', this).fadeOut('fast');
        //         }
        //     );
        // });

        /* Flash Deals */
        // $('.flash-deals-products-carousel').owlCarousel({
        //     loop:true,
        //     margin:10,
        //     nav:true,
        //     responsive:{
        //         0:{
        //             items:1
        //         },
        //         600:{
        //             items:3
        //         },
        //         1000:{
        //             items:5
        //         }
        //     }
        // })

        /* CAROUSEL JS */
        $('.top-categories-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            stagePadding: 0,
            autoplay: false,
            autoplayTimeout: 7000,
            lazyLoad: true,
            dots: false,
            dotsData: false,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {},
                480: {},
                768: {},
                992: {},
                1200: {}
            }
        });

        $('.official-stores-carousel').owlCarousel({
            loop: true,
            margin: 15,
            items: 3,
            stagePadding: 5,
            autoplay: false,
            autoplayTimeout: 7000,
            lazyLoad: true,
            dots: false,
            dotsData: false,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    margin: 8
                },
                480: {},
                768: {},
                992: { items: 2 },
                1200: {}
            }
        });

        // $(".hero-banner-carousel").owlCarousel({
        //     loop: true,
        //     margin: 0,
        //     items: 1,
        //     stagePadding: 0,
        //     autoplay: false,
        //     autoplayTimeout: 7000,
        //     dots: true,
        //     animateOut: "slideOutLeft",
        //     animateIn: "slideInRight",
        //     nav: true,
        //     navText: [
        //         "<i class='fas fa-chevron-left'></i>",
        //         "<i class='fas fa-chevron-right'></i>"
        //     ],
        //     responsiveClass: true,
        //     responsive: {
        //         0: {},
        //         480: {},
        //         768: {},
        //         992: {},
        //         1200: {}
        //     }
        // });

        // if($(".shop-banner-image").length > 1) {
        //     $(".shop-banner-carousel").owlCarousel({
        //         loop: true,
        //         margin: 0,
        //         items: 1,
        //         stagePadding: 0,
        //         autoplay: false,
        //         autoplayTimeout: 7000,
        //         dots: false,
        //         animateOut: "slideOutLeft",
        //         animateIn: "slideInRight",
        //         nav: true,
        //         navText: [
        //             "<i class='fas fa-chevron-left'></i>",
        //             "<i class='fas fa-chevron-right'></i>"
        //         ],
        //         responsiveClass: true,
        //         responsive: {
        //             0: {},
        //             480: {},
        //             768: {},
        //             992: {},
        //             1200: {}
        //         }
        //     });
        // }

        // $(".featured-categories-carousel").owlCarousel({
        //     loop: false,
        //     margin: 20,
        //     items: 6,
        //     stagePadding: 0,
        //     autoplay: false,
        //     autoplayTimeout: 7000,
        //     dots: false,
        //     animateOut: "slideOutLeft",
        //     animateIn: "slideInRight",
        //     nav: true,
        //     navText: [
        //         "<i class='fas fa-chevron-left'></i>",
        //         "<i class='fas fa-chevron-right'></i>"
        //     ],
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 2,
        //             margin: 8,
        //         },
        //         480: {
        //             items: 3,
        //         },
        //         768: {
        //             items: 4,
        //         },
        //         992: {
        //             items: 5,
        //         },
        //         1200: {}
        //     }
        // });

        // $(".top-trending-carousel").owlCarousel({
        //     loop: false,
        //     margin: 20,
        //     items: 2,
        //     stagePadding: 0,
        //     autoplay: false,
        //     autoplayTimeout: 7000,
        //     dots: false,
        //     animateOut: "slideOutLeft",
        //     animateIn: "slideInRight",
        //     nav: true,
        //     navText: [
        //         "<i class='fas fa-chevron-left'></i>",
        //         "<i class='fas fa-chevron-right'></i>"
        //     ],
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 1,
        //             margin: 8,
        //         },
        //         480: {
        //             items: 2,
        //         },
        //         768: {
        //             items: 3,
        //         },
        //         992: {},
        //         1200: {},
        //         1600: {
        //             items: 3,
        //         },
        //         2000: {
        //             items: 4,
        //         }
        //     }
        // });

        $('.related-products-carousel').owlCarousel({
            loop: false,
            margin: 20,
            items: 5,
            stagePadding: 0,
            autoplay: false,
            autoplayTimeout: 7000,
            dots: false,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 8
                },
                480: {
                    items: 2
                },
                768: { items: 3 },
                992: { items: 4 },
                1200: {},
                1600: {
                    items: 6
                },
                2000: {
                    items: 6
                }
            }
        });

        $('.seller-products-carousel').owlCarousel({
            loop: false,
            margin: 20,
            items: 5,
            stagePadding: 0,
            autoplay: false,
            autoplayTimeout: 7000,
            dots: false,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 8
                },
                480: {
                    items: 2
                },
                768: { items: 3 },
                992: { items: 4 },
                1200: {},
                1600: {
                    items: 6
                },
                2000: {
                    items: 6
                }
            }
        });

        $('.trending-blog-list-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 7000,
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {},
                480: {},
                768: {},
                992: {},
                1200: {}
            }
        });

        if ($('.single-recommend-product').length > 1) {
            $('.blog-recommendations-carousel').owlCarousel({
                loop: true,
                margin: 20,
                items: 4,
                stagePadding: 0,
                autoplay: false,
                autoplayTimeout: 7000,
                dots: false,
                animateOut: 'slideOutLeft',
                animateIn: 'slideInRight',
                nav: true,
                navText: [
                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>"
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 8
                    },
                    480: {
                        items: 2
                    },
                    768: { items: 3 },
                    992: {},
                    1200: {}
                }
            });
        }

        if ($('.single-related-post').length > 1) {
            $('.related-post-carousel').owlCarousel({
                loop: true,
                margin: 20,
                items: 3,
                stagePadding: 0,
                autoplay: false,
                autoplayTimeout: 7000,
                dots: false,
                animateOut: 'slideOutLeft',
                animateIn: 'slideInRight',
                nav: true,
                navText: [
                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>"
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: { items: 3 },
                    992: {},
                    1200: {}
                }
            });
        }

        if ($('.single-more-author-post').length > 1) {
            $('.more-author-post-carousel').owlCarousel({
                loop: true,
                margin: 20,
                items: 3,
                stagePadding: 0,
                autoplay: false,
                autoplayTimeout: 7000,
                dots: false,
                animateOut: 'slideOutLeft',
                animateIn: 'slideInRight',
                nav: true,
                navText: [
                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>"
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: { items: 3 },
                    992: {},
                    1200: {}
                }
            });
        }

        // $('select:not(.swal2-select)').select2();
        //
        $(document).on('click', '.top-bar-language-country-currency-area .dropdown-menu', function(
            e
        ) {
            e.stopPropagation();
        });
        //
        // // SELECT 2
        // $('.color-var-select').select2({
        //     templateResult: colorCodeSelect,
        //     templateSelection: colorCodeSelect,
        //     escapeMarkup: function(m) { return m; }
        // });
        //
        // $("select.order-status-select").select2({
        //     minimumResultsForSearch: -1,
        //     containerCssClass: "order-status-select-container",
        //     dropdownCssClass: "order-status-select-dropdown"
        // });

        $('.single-product-sold-count-bar').each(function() {
            var width = ($(this).attr('data-sold-count') / $(this).attr('data-total-count')) * 100;
            $(this).css({
                width: width + '%'
            });
        });

        $('.product-countdown-timer').each(function(index) {
            var end_date = new Date($(this).attr('data-end-time'));
            var that = $(this);
            $(this).syotimer({
                year: end_date.getFullYear(),
                month: end_date.getMonth() + 1,
                day: end_date.getDate(),
                hour: end_date.getHours(),
                minute: end_date.getMinutes(),
                afterDeadline: function(syotimer) {
                    that.remove();
                    // syotimer.bodyBlock
                    //     .html(
                    //         '<p class="product-countdown-timer-finish-message">The countdown was finished at '+ end_date +'</p>'
                    //     );
                }
            });
        });

        $(document).on(
            'click',
            '.product-menu-sticky-area .nav.nav-tabs .nav-item.nav-link',
            function() {
                $('html, body').animate(
                    {
                        scrollTop: $('.all-product-row').offset().top - top_offset - 65
                    },
                    1000
                );
            }
        );

        // SCROLLSPY
        $('body').scrollspy({
            target: '.main-category-box',
            offset: top_offset
        });
        $('.main-category-box').css({
            top: $('.header-fixed').height() + 'px'
        });
        $('.product-menu-fixed-area').css({
            top: $('.header-fixed').height() + 'px'
        });
    });

    jQuery(window).load(function() {});
})(jQuery);

function colorCodeSelect(state) {
    var colorCode = $(state.element).val();
    if (!colorCode) return state.text;
    return (
        "<span class='color-preview' style='background-color:" +
        colorCode +
        ";'></span>" +
        state.text
    );
}
