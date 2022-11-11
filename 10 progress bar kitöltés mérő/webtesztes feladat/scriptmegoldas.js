function ertekel() {
    let jo = 0;
    let total = 6;


    if (document.teszt.k1[3].checked) jo++;
    if (document.teszt.k2[2].checked) jo++;
    if (document.teszt.k3[2].checked) jo++;
    if (document.teszt.k4[1].checked) jo++;
    if (document.teszt.k5[2].checked) jo++;
    if (document.teszt.k6[0].checked) jo++;

    /*let percentage = (Math.floor((jo * 100) / total).toFixed(2));*/

    /*let percentage = (Math.floor(jo * 100) / total)); ezzel kerekítünk*/
    let percentage = ((jo * 100) / total).toFixed(2);


    alert("Helyes válaszaid száma: " + percentage + "%");
}