// side navigation conversion
(function($) {
    $(function() {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    // Lightbox module
    $('.materialboxed').materialbox();

    // Progress bar custom animation: setting the width of the progress bar div to the custom data attribute when scrolled 50px using scrollFire()
    var options = [{
            selector: '#bar1',
            offset: 50,
            callback: function() {
                $("#bar1").animate({
                    width: $("#bar1").attr('data-percent')
                }, 1500);
            }
        },
        {
            selector: '#bar2',
            offset: 50,
            callback: function() {
                $("#bar2").animate({
                    width: $("#bar2").attr('data-percent')
                }, 1500);
            }
        },
        {
            selector: '#bar3',
            offset: 50,
            callback: function() {
                $("#bar3").animate({
                    width: $("#bar3").attr('data-percent')
                }, 1500);
            }
        },
        {
            selector: '#bar4',
            offset: 50,
            callback: function() {
                $("#bar4").animate({
                    width: $("#bar4").attr('data-percent')
                }, 1500);
            }
        }
    ];
    Materialize.scrollFire(options);


});
