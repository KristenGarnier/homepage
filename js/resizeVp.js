$(document).ready(function () {

    $target = $('.fillScreen');

    var height = windowSet();
    if($target){
        fondSet(height, $target);
        voyagesSet(height);
    }

    // quand on redimensionne la fenetre
    $(window).resize(function(){
        height = windowSet();
        if($target){
            console.log(height);
            fondSet(height, $target);
            voyagesSet(height)
        }
    });

    function fondSet(height, $target){

        $target.height(height);

    }


// fonction pour que le fond occupe toute la page
    function windowSet(){
        var height = $(window).height();

        return height;
    }

});

function voyagesSet(height) {

    console.log(height, $('.resultcontent').height());

    if(height < $('.resultcontent').height()){

        console.log('in');
        $('#researchBigPicture').height( $('.resultcontent').height() + 200);

        return false;
    }else {
        $('#researchBigPicture').height( height);
    }

    return true;
}
