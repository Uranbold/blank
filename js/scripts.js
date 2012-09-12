jQuery(document).ready(function(){

function onAfterjCycle(curr, next, opts, fwd) {

    var $ht = jQuery(this).find('img').height();

    //set the container's height to that of the current slide
    if($ht!=0)
        jQuery(this).parent().animate({
            height: $ht
        });
}

jQuery('.entry-image-slide').each(function(index){
        var myPager=jQuery('<ul class="jcycle-pager nav-item'+index+'">');
        jQuery(this).after(myPager).cycle({
            pager:  myPager,
            fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
            easing: 'jswing',
            pause: true,
            autostop: false,
            after:onAfterjCycle,
            pagerAnchorBuilder: function(idx, slide) {
                return '<li><a href="#">*</a></li>';
            }
        });
    });

});