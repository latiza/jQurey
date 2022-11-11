$(function() {
    //elemek összegyűjtése
    let $image = $('.image-wrapper img');
    //esemény, az összes img elemre reagálni fog
    $image.click(function() {

        // a $this az aktuálisan kattintott elemet fogja jelölni
        let $actualImage = $(this);
        if (!$actualImage.hasClass('scale-half')) {
            return;
        }

        // aktuális kép
        let $previousImage = $('.image-wrapper img:not(.scale-half)');

        // class variálás
        $previousImage.addClass('scale-half');
        $actualImage.removeClass('scale-half');
    });
});