$(document).ready(function() {
  $("#userName").hover(function() {
    $("#userName > a").dropdown('toggle');
  });

  $('#trackingButton').on('click', function () {
    var $btn = $(this).button('loading');
    $.get("track", function(data) {
      $("#cool").html(data);
      $btn.button('reset');
    });
    return false;
  });

  $("#backToTop").on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});
