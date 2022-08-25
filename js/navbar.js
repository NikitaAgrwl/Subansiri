$(function () {
    $(document).scroll(function () {
        let $nav = $(".fixed-top");
        // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > 200);
    });
});