
(function () {
    placeCar();

    $(window).resize(function () {
        placeCar();
    });
    function placeCar() {
        var $rouge = $('#rouge');
        var $bleue = $('#bleue');
        var heightRed = 580;
        var heightBlue = 530;

        var width = $(window).width();

        placeOffer(width);

        if (width < 1500) {
            heightBlue = 550;
            heightRed = 600;

        }

        $rouge.css("transform", "translate3d(" + (width - 200) + "px, " + (heightRed) + "px, 0px)");
        $bleue.css("transform", "translate3d(0px, " + (heightBlue) + "px, 0px)");
    }

    function placeOffer(width) {

        var $offre = $('#offre');

        var widthOffre = $offre.width();

        var result = (width / 2) - (widthOffre / 2);


        $offre.css("transform", "translate(" + result + "px, 30% )");
    }
}());