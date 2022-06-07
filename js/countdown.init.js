//countdown.init.js
$('#countdown').countdown('2020/1/25', function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head">Days</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head">Hours</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head">Minutes</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head">Seconds</span></div>'
    ));
});