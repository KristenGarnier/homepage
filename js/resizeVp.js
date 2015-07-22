$(document).ready(function () {

    $target = $('.fillScreen');

    var height = windowSet();
    if($target){
        fondSet(height, $target);
    }

    // quand on redimensionne la fenetre
    $(window).resize(function(){
        height = windowSet();
        if($target){
            fondSet(height);
        }
    })

});

// fonction pour centrer le formulaire d'inscription [non  terminée ]
function fondSet(height, $target){

    $target.height(height);

}


// fonction pour que le fond occupe toute la page
function windowSet(){
    var height = $(window).height();

    return height;
}