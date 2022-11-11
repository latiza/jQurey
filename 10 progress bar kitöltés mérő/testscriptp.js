$(function() {
    console.log("beolvasva")
        // elemek összegyűjtése
    let $progressBar = $('.progress-bar');
    let $input = $('form input');
    let $button = $('button[type="submit"]');
    let $questionsWrapper = $('div.questions');
    let $thanksWrapper = $('div.thanks');
    let $numberOfCheckedRadio = $('input:radio:checked').length;
    // progress bar kezdeti érték megadása
    UpdateProgressBar(0);

    // változásokra reagálás
    $input.click(function() {
        let percent = Math.round(CountCheckedRadio() / CountChecked()*400 );
        UpdateProgressBar(percent);

        if (percent == 100) {
            $button.prop('disabled', false);
        } else {
            $button.prop('disabled', true);
        }
    });

    // submitra reagálás
    $button.click(function(event) {
        // alapértelmezett működés megakasztása
        event.preventDefault();

        // kérdések elrejtése
        $questionsWrapper.hide();

        // köszönő szöveg megjelenítése
        $thanksWrapper.show();
    });


    // progress bar állítása
    function UpdateProgressBar(percent) {
        $progressBar.attr('aria-valuenow', percent);
        $progressBar.css('width', percent + '%');
        $progressBar.text(percent + '%');
       
    }

    // kitöltött mezők megszámlálása
    
    function CountCheckedRadio() {
        let count = 0;

        // összes mezőn végigfutás
        $("input:radio:checked").each(function(index, element) {
            // element == this
            let $element = $(element);

            // számláló növelése, ha nem üres a mező
           if ($element.val()) {
             count++;
        
           console.log(count)
            }
        });
              
        // a függvény visszaadja a számlálót
        return count;
    }

    // összes mező megszámlálása
    function CountChecked() {
        return $(":radio").length;
        
    }
});
