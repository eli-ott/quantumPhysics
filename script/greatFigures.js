//we're letting the content seen
$(".photos").on('click', function () {
    $(this).find('.photosContentBackground').toggleClass('deploy');
});

//we're deploying the content only on hover 
$(".photos").hover(function () {
    if (!$(this).find('.photosContentBackground').hasClass('deploy')) {
        $(this).find('.photosContentBackground').css('transform', 'scaleY(1)');
    }
}, function () {
    if (!$(this).find('.photosContentBackground').hasClass('deploy')) {
        $(this).find('.photosContentBackground').css('transform', 'scaleY(0)');
    }
});