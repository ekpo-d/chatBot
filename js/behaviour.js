/**
 * Created by EKPO.d on 14/02/2016.
 */

//FOR SCREEN SIZE

$(window).load(function() {
    var theWindow        = $(window),
        $bg              = $("#bg"),
        aspectRatio      = $bg.width() / $bg.height();
    function resizeBg() {
        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg
                .removeClass()
                .addClass('bgheight');
        } else {
            $bg
                .removeClass()
                .addClass('bgwidth');
        }

    }
    theWindow.resize(resizeBg).trigger("resize");
});
