/**
 •	fontos, hogy a jquery link után álljon a srcipt fájlunkra a hivatkozásunk, 
•	és a záró body elé tegyük, hogy először a html töltődjön be, hiszen azt akarjuk manipulálni, 
(ha a headbe tesszük, az is jó, csak akkor meg kell adni, hogy csak akkor töltődjön be ha a html betöltődöt). 
 */
/* kiválasztás
$(div);
$('#lablec');
$('.service');
$('#main.service ul li')

Meghívás:
$(document).ready(function(){
 //csak akkor fut ha minden DOM element betöltődött
 //alert( "A DOM betöltődött!" )
});

$(window).on("load",function(){
    //nemcsak a DOM, hanem a képek és ifremek is betöltődtek
}); 
*/

//amikor az oldal betöltődött, itt reagálunk rá egy függvénnyel
$(document).ready(function(){
    //$(function(){ így is jó ha lusták vagyunk gépelni;
    //jQuery(function(){ sőt így is jó
/*a függvényben definiáltunk egy változót, ebben jelöljük, hogy ez egy jQuery-s váltózó, de $ jel nélkül is rendben működik, tehát ezt nem muszály*/
let $szoveg= $("h1").text(); 

console.log("Nem tároltuk el változóba:",$("h1").text());
console.log("Eltároltuk változóba:", $szoveg);

//cserebogarat kicseréljük
$("h2").text("ez js-ből változtattuk meg");
console.log($("h2").text());

//kikérhetjük a szín kódot
console.log($(".sarga").css("background"));

//$(".sarga").css("background-color","red");

});