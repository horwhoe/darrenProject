$(document).ready(function() {
  $("#userName").hover(function() {
    $("#userName > a").dropdown('toggle');
  });

  $('#trackingButton').on('click', function () {
    var $btn = $(this).button('loading');
    setTimeout(function() {
      $btn.button('reset');
    }, 2000);
  });

  $("#backToTop").on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});
