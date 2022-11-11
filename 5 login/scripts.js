/**Próbáljuk ki, hogy meg tudjuk e jeleníteni az elrejtett elemeket:
 * $(".alert-success").show(); ha nem gépeled el, akkor meg fog jelenni 
 * $(".alert-success").hide(); erre pedig el fog tűnni.
 */

$(function() {
    // jQuery elemek összegyűjtése
    
    // 1.) button tárolása
    let $button = $('button.btn.btn-primary');
    //3.)
    let $alertSuccess = $('.alert-success');
    let $alertDanger = $('.alert-danger');
    let $email = $('input[type="email"]');
    let $password = $('input[type="password"]');

    // email és jelszó
    const properEmail = 'user@email.hu';
    const properPassword = '123456';

    /* 2.) bejelentkezési kísérlet kezelése
      $button.click(function(){
        console.log('click történt)
        })
        de meg kell állítanuk a böngésző alapértlemezett működését, ezért egészítsük ki:
    $button.click(function(event) {
        event.preventDefault();
        console.log('click történt)
    })*/
    $button.click(function(event) {
        event.preventDefault();
//4.) eldöntendő bejelentkezhet e
        if (properEmail === $email.val() && properPassword === $password.val()) {
            $alertDanger.hide();
            $alertSuccess.show();
        } else {
            $alertSuccess.hide();
            $alertDanger.show();
        }
    });
});