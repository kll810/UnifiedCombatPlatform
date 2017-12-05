$(document).ready(function() { //页面加载完后执行
    $('#collapseExample').on('hide.bs.collapse', function() {
        $('.talkbox').css('height','347px');
        $('#js-collapselink i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    })
    $('#collapseExample').on('show.bs.collapse', function() {
        $('.talkbox').css('height','120px');
        $('#js-collapselink i').addClass('fa-chevron-up').removeClass('fa-chevron-down');
    })
});
