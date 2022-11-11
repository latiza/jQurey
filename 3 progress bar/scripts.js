/**nézzük meg mi is az a progress bar
 * https://getbootstrap.com/docs/4.6/components/progress/
 * 
 */

$(function () {
    //4) ahhoz, hogy reagáljon a % változásra figyelni kell, változik e, tegyük függvénybe
    $('input#percent').change(function() {
        // 1.) elemek összegyűjtése
        let $input = $('input[type="number"]');
        console.log($input);
        //let $input = $(this); //így is megadhatod
        let $progress = $('.progress-bar');

        // 2.) input mezőben lévő %-os érték begyűjtése
        let percent = $input.val();
        console.log(percent);

        // értékek beállítása       
        // 3.) text, progress baron lévő szöveg
        $progress.text(percent + '%');
        // 4.) css-ben állítsuk be a szélességét, a kék csíknak
        $progress.css('width', percent + '%');
        // 5.)aria-valuenow, hogy html-ben is változzon az értéke
        $progress.attr('aria-valuenow', percent);
    });
});
