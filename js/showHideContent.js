
(function(){
    $('.resultcontent').toggleClass('hidden');
    $('select').on('click', function () {
        console.log('test');
        $('.resultcontent').toggleClass('hidden');
        $('.imageSearch').addClass('hidden');
        voyagesSet($(window).height());
    })
}());