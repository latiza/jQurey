function ertekel() {
    let jo = 0;
    if (document.teszt.k1[3].checked) jo++;
    if (document.teszt.k2[2].checked) jo++;
    if (document.teszt.k3[2].checked) jo++;
    if (document.teszt.k4[1].checked) jo++;
    if (document.teszt.k5[2].checked) jo++;

    alert("Helyes válaszaid száma: " + jo);
}