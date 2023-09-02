"use strict";


// Prealoder
function prealoader() {
    if ($('#loader').length) {
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });
    };
}

// Banner rev Slider 
function mainBanner() {
    if ($("#banner").length) {
        $("#main_slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7500,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "hephaistos",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="arrow-holder"> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 28,
                        v_offset: 32
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 43,
                        v_offset: 32
                    }
                },
            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 480],
            gridheight: [700, 700, 700, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    };
}




function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}


// Select menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}


// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}


// Main Menu Function 
function themeMenu() {
    if ($("#main_menu").length) {
        $("#main_menu").menuzord({
            animation: "stretch"
        });
    }
}




// Fancybox Video
function FancypopUpVideo() {
    if ($(".fancy_video").length) {
        $(".fancy_video").fancybox({
            maxWidth: 1080,
            maxHeight: 1080,
            fitToView: false,
            width: '85%',
            height: '85%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    };
}

// Fancybox 
function FancypopUp() {
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0, 0, 0, 0.6)'
                    }
                }
            }
        });
    };
}


// Sticky header
function stickyHeader() {
    if ($('.theme_menu').length) {
        var sticky = $('.theme_menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 265) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    };
}


// Counter function
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }
}

// Service Slider
function ServiceSlider() {
    if ($('.service_slider').length) {
        $('.service_slider').owlCarousel({
            loop: true,
            nav: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1001: {
                    items: 3
                }
            }
        })
    }
}



// testimonial Slider
function testimonialSlider() {
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            center: true,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1001: {
                    items: 3
                }
            }
        })
    }
}



// Accordion panel
function themeAccrodion() {
    if ($('.theme-accordion > .panel').length) {
        $('.theme-accordion > .panel').on('show.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.addClass("active-panel");

        });

        $('.theme-accordion > .panel').on('hidden.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.removeClass("active-panel");
            //setProgressBar(heading.get(0).id);
        });

        $('.panel-heading a').on('click', function(e) {
            if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
                e.stopPropagation();
            }
        });

    };
}


// Partner Logo Footer 
function partnersLogo() {
    if ($('#partner_logo').length) {
        $('#partner_logo').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                550: {
                    items: 3
                },
                1001: {
                    items: 5
                }
            }
        })
    }
}



// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}



// Chart function 
function chartBox() {
    if ($("#chartbar").length) {
        var chart = new CanvasJS.Chart("chartbar", {

            data: [ //array of dataSeries     
                { //dataSeries - first quarter
                    /*** Change type "column" to "bar", "area", "line" or "pie"***/
                    type: "column",
                    showInLegend: false,
                    color: "#6e8cd7",
                    dataPoints: [
                        { label: "2009", y: 100 },
                        { label: "2010", y: 75 },
                        { label: "2011", y: 50 },
                        { label: "2012", y: 75 }
                    ]
                },

                { //dataSeries - second quarter

                    type: "column",
                    showInLegend: false,
                    color: "#dcdcdc",
                    dataPoints: [
                        { label: "2009", y: 90 },
                        { label: "2010", y: 65 },
                        { label: "2011", y: 40 },
                        { label: "2012", y: 65 }
                    ]
                }
            ],
            axisY: {
                tickLength: 0,
                gridColor: "#fbfcfc",
                interval: 25,
                lineColor: "transparent"
            },
            axisX: {
                tickLength: 10,
                gridColor: "transparent",
                lineColor: "transparent",
                tickColor: "transparent"
            },
        });

        chart.render();
    }
}




// Chart function Two 
function chartBoxTwo() {
    if ($("#chartbarTwo").length) {
        var chart = new CanvasJS.Chart("chartbarTwo", {

            data: [ //array of dataSeries     
                { //dataSeries - first quarter
                    /*** Change type "column" to "bar", "area", "line" or "pie"***/
                    type: "column",
                    showInLegend: false,
                    color: "#6e8cd7",
                    dataPoints: [
                        { label: "2009", y: 100 },
                        { label: "2010", y: 75 },
                        { label: "2011", y: 50 },
                        { label: "2012", y: 75 },
                        { label: "2013", y: 50 }
                    ]
                },

                { //dataSeries - second quarter

                    type: "column",
                    showInLegend: false,
                    color: "#dcdcdc",
                    dataPoints: [
                        { label: "2009", y: 90 },
                        { label: "2010", y: 65 },
                        { label: "2011", y: 40 },
                        { label: "2012", y: 65 },
                        { label: "2013", y: 35 }
                    ]
                }
            ],
            axisY: {
                tickLength: 0,
                gridColor: "#fbfcfc",
                interval: 25,
                lineColor: "transparent"
            },
            axisX: {
                tickLength: 10,
                gridColor: "transparent",
                lineColor: "transparent",
                tickColor: "transparent"
            },
        });

        chart.render();
    }
}

// Bar chart function 
function barTableOne() {
    if ($('#chart-tableOne').length) {
        var ctx = $("#chart-tableOne");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Company dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80, 81, 56, 55, 0],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };
}



//Contact Form Validation
function contactFormValidation() {
    if ($('.form-validation').length) {
        $('.form-validation').validate({ // initialize the plugin
            rules: {
                category: {
                    required: true
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
    }
}

// Close suddess Alret
function closeSuccessAlert() {
    if ($('.closeAlert').length) {
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        });
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        })
    }
}


// Share item Show
function blogShareSlide() {
    if ($('.share-content').length) {
        $('.share_box button').on('click', function() {
            $(this).parent().find('.share-content').toggleClass('share-show');
        });
    };
}



// Mixitup gallery
function mixitupGallery() {
    if ($("#mixitup_list").length) {
        $("#mixitup_list").mixItUp()
    };
}


// isoptop 
function masanory() {
    if ($("#isotop_wrapper").length) {
        var $grid = $('#isotop_wrapper').isotope({
            // options
            itemSelector: '.isotop_item',
            layoutMode: 'masonry'

        });

        // filter items on button click
        $('.mixitUp_menu').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('.mixitUp_menu').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    };
}



// Related Project Slider 
function relatedProject() {
    if ($('#related_project_slider').length) {
        $('#related_project_slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                320: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
}


// Price Ranger 
function priceRange() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 5,
            max: 100,
            values: [11, 49],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}

// Doughnut Charts 
function doughnutChartBox() {
    if ($('#doughnut-chartBox').length) {
        var ctx = $("#doughnut-chartBox");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#30bcbe",
                        "#36a1e9",
                        "#9185c2"
                    ],
                    hoverBackgroundColor: [
                        "#30bcbe",
                        "#36a1e9",
                        "#9185c2"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}


// Area Chart function
function areaChartOne() {
    if ($("#area-chartOne").length) {
        var chart = new CanvasJS.Chart("area-chartOne", {

            data: [{
                    type: "splineArea",
                    color: "rgba(18,29,47,1)",
                    fillOpacity: 1,
                    markerBorderColor: "#fff",
                    markerColor: "#9185c2",
                    markerSize: 10,
                    dataPoints: [
                        { x: (0), y: 17 },
                        { x: (1), y: 10 },
                        { x: (2), y: 13 },
                        { x: (3), y: 18 },
                        { x: (4), y: 14 }
                    ]
                }, {
                    type: "splineArea",
                    color: "rgba(36,187,208,1)",
                    fillOpacity: 1,
                    markerBorderColor: "#fff",
                    markerColor: "#24bbd0",
                    markerSize: 10,
                    dataPoints: [
                        { x: (0), y: 4 },
                        { x: (1), y: 8 },
                        { x: (2), y: 4 },
                        { x: (3), y: 10 },
                        { x: (4), y: 8 }
                    ]
                }

            ]
        });

        chart.render();
    }
}


// Doughnut Charts 
function doughnutChartOne() {
    if ($('#doughnutOne').length) {
        var ctx = $("#doughnutOne");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#30bcbe",
                        "#36a1e9",
                        "#9185c2"
                    ],
                    hoverBackgroundColor: [
                        "#30bcbe",
                        "#36a1e9",
                        "#9185c2"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}


// Doughnut Charts 
function doughnutChartTwo() {
    if ($('#doughnutTwo').length) {
        var ctx = $("#doughnutTwo");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#36a1e9",
                        "#30bcbe",
                        "#9185c2"
                    ],
                    hoverBackgroundColor: [
                        "#36a1e9",
                        "#30bcbe",
                        "#9185c2"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}


// Doughnut Charts 
function doughnutChartThree() {
    if ($('#doughnutThree').length) {
        var ctx = $("#doughnutThree");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#9185c2",
                        "#36a1e9",
                        "#30bcbe"
                    ],
                    hoverBackgroundColor: [
                        "#9185c2",
                        "#36a1e9",
                        "#30bcbe"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}



// WOW animation 
function wowAnimation() {
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 80, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        });
        wow.init();
    }
}







// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        mainBanner();
        countryInfo();
        selectDropdown();
        removePlaceholder();
        themeMenu();
        FancypopUpVideo();
        CounterNumberChanger();
        ServiceSlider();
        testimonialSlider();
        themeAccrodion();
        partnersLogo();
        scrollToTop();
        contactFormValidation();
        closeSuccessAlert();
        blogShareSlide();
        FancypopUp();
        mixitupGallery();
        barTableOne();
        relatedProject();
        priceRange();
        doughnutChartBox();
        areaChartOne();
        doughnutChartOne();
        doughnutChartTwo();
        doughnutChartThree();
        wowAnimation();
    })(jQuery);
});



// Window scroll function
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});




// Window load function
jQuery(window).on('load', function() {
    (function($) {
        chartBox();
        chartBoxTwo();
        masanory();
        prealoader();
    })(jQuery);
});
