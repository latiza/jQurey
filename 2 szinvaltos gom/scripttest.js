//futtassuk a scriptünket, ha már betöltött az oldal
$(function() {
    //elem megkeresése
    let $button = $('button#btn-random');
    console.log("Gombunk:",$button);
    /**
     * rgb 0,0,0 - fekete;255,255,255 fehér=>összes ezek keveréke
     * ezek keverékéből tudunk kikeverni színeket
     */
//ezzel biztosítjuk, hogy akkor adjon színt, ha rákkatinttunk a gombra
    $button.click(function() {
        //rgb kódok előállítása
/* próbáld ki a konzolon: Math.random kiírja azt hogy ez egy függvény,
Math.random(); - ha beírod zárójellel, akkor vissza ad egy értéket
Láthatod, hogy a math.random 0 és 1 közötti számmal tér vissza, tehát jó megoldás lesz, ha ezt a számot megszorozzuk a 255-el. Már csak kerekítenünk kell. Ha a konzolba beírod: Math.round(0.1) vissza ad 0-át, ha beírod 0.6 akkor vissza ad 1-et, tehát  a hozzá legközelebbi egész számot fogja vissza adni, ahhoz kerekít.
        https://www.w3schools.com/js/js_random.asp */
        const max = 255;
        let red = Math.round(Math.random() * max);
        let green = Math.round(Math.random() * max);
        let blue = Math.round(Math.random() * max);
        console.log('red:' + red);
        console.log('green:' + red);
        console.log('blue:' + red);

        // 1.) rgb színek beállítása
        //$button.css('background-color', 'red'); ezzel piros lesz a gomb
        $button.css('background-color', 'rgb(' + red + ',' + green +
            ',' + blue + ')');

        /*betű színét is állítsuk be, hogy lássuk, ha sötét az alapszín, akkor világos legyen a betű. Honnan tudhatjuk azt, hogy mikor elég sötét, ha 255 felénél nagyobb, akkor az már világos szín lesz, és onnantól kezdve, jobb lesz a fekete betű. */
        let avg = (red + green + blue) / 3;
        console.log('avg: ', avg); 
        /*Ahhoz hogy megvizsgáljuk a kapott szám, kisebb vagy nagyobb mint 255 fele, a legegyszerűbb osztani 255-el és vizsgálni nagyobb e mint 0,5
        ha nagyobb akkor világos hátteret fogunk kapni és jobb lesz a fekete betű, ellenkező esetben a fehér. Ennek eldöntésére, legegyszerűbb az if vezérlési szerkezetet használni, vagy a conditional operátort. */
        /*if (avg / 255 > 0.5) {
            $button.css('color', 'black')
        } else {
            $button.css('color', 'white');
        }*/
        (avg / 255 > 0.5) ? $button.css('color', 'black') : $button.css('color', 'white');
    });
});
