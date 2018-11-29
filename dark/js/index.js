$("#introSlideshow > img:gt(0)").hide();
setInterval(function () {
    $('#introSlideshow > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#introSlideshow');
}, 3000);

$('#slider').nivoSlider({
    effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 850, // Slide transition speed
    pauseTime: 4000, // How long each slide will show
    startSlide: 2, // Set starting Slide (0 index)
    directionNav: true, // Next Prev navigation
    directionNavHide: true, // Only show on hover
    controlNav: true, // 1,2,3... navigation
    controlNavThumbs: true, // Use thumbnails for Control Nav
    pauseOnHover: true, // Stop animation while hovering
    prevText: 'Prev', // Prev directionNav text
    nextText: 'Next', // Next directionNav text
    randomStart: true, // Start on a random slide
});

$(document).ready(function() {
    $("body").fadeIn(2000);
    $("#openAlbumTravel").pageslide({});
    $("#openAlbumProject").pageslide({
        direction: "left"
    });

    $(".travel").fancybox({
        href: this.href,
        maxWidth: 800,
        type: 'iframe',
        fitToView: true,
        width: '100%',
        height: '100%',
        autoSize: true,
        iframe: {
            preload: false
        }
    });
    $(".dataStructure").fancybox({
        href: this.href,
        maxWidth: 950,
        type: 'iframe',
        autoCenter: true,
        scrolling : 'yes',
        width: '100%',
        height: '100%',
    });

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
	
    $("a.animateScroll").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, function() {

            });
        } // End if
    });

    // Set active page on the navigation menu
    $('#templatemo_menu ul li a').click(function () {
        $('li a').removeClass("activePage");
        $(this).addClass("activePage");
    });

    // Coding page
    $(function () {
        $("#tabs").tabs();
    });
    // Set active tab on the navigation menu
    $('ol.rtabs li a').click(function () {
        $('ol.rtabs li a').removeClass("activeTab");
        $(this).addClass("activeTab");
    });
}); // ready

$(function() {
    $(".draggable").draggable({
        cursor: "crosshair",
        containment: 'parent'
    });
    google.setOnLoadCallback(function() {
        $(".draggable").each(function() {
            var tempVal = Math.round(Math.random());
            if (tempVal == 1) {
                var rotDegrees = randomXToY(330, 360);
            } else {
                var rotDegrees = randomXToY(0, 30);
            }
            var position = $(this).parent().offset();
            var wiw = $(this).parent().width();
            var wih = $(this).parent().height();
            var leftpos = Math.random() * (wiw - $(this).width());
            var toppos = Math.random() * (wih - position.top);
            var cssObj = {
                'left': leftpos,
                'top': toppos,
                '-webkit-transform': 'rotate(' + rotDegrees + 'deg)',
                '-moz-transform': 'rotate(' + rotDegrees + 'deg)',
                'transform': 'rotate(' + rotDegrees + 'deg)'
            };
            $(this).css(cssObj);
        });

        function randomXToY(minVal, maxVal, floatVal) {
            var randVal = minVal + (Math.random() * (maxVal - minVal));
            return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
        }
    });
});

function moveHash() {
    if (!window.location.hash) {
        window.location.hash = "home";
        window.location.reload();
    }
}

function bgChange(image) {
    $('.layout').css('background', 'url(' + image + ') no-repeat');
}

function bgNormal() {
    $('.layout').css('background', '');
}

$("#hideShowTable").click(function () {
    $header = $(this);

    // Get the next element
    $content = $header.next();

    // Open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        // Execute this after slideToggle is done
        // Change text of header based on visibility of content div
        $header.text(function () {
            // Change text based on condition
            return $content.is(":visible") ? "Table of Content - Hide" : "Table of Content - Show";
        });
    });

});