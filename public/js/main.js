$(document).ready(function() {
  $("#userName").hover(function() {
    $("#userName > a").dropdown('toggle');
  });

  $('#trackingButton').on('click', function () {
    var $btn = $(this).button('loading');
    var trackingNumberInput = $("#trackingNumberInput").val();
    $.get("track/"+trackingNumberInput, function(data) {
      var html = getTrackingHtml();
      html = html.replace("::trackingNumber::", data.id);
      html = html.replace("::status::", data.status);
      html = html.replace("::currentLocation::", data.location);
      html = html.replace("::shippedDate::", data.shippedDate);
      html = html.replace("::deliveredDate::", data.deliveredDate);

      $("#cool").html(html);
      $btn.button('reset');
    });
    return false;
  });

  $("#backToTop").on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

function getTrackingHtml() {
  var html = '<div>';
  html += '<table class="table table-striped">';
  html += '<tr>';
  html += '<th>Tracking Number</th>';
  html += '<th>Status</th>';
  html += '<th>Current Location</th>';
  html += '<th>Shipped Date</th>';
  html += '<th>Delivered Date</th>';
  html += '</tr>';
  html += '<tr>';
  html += '<td>::trackingNumber::</td>';
  html += '<td>::status::</td>';
  html += '<td>::currentLocation::</td>';
  html += '<td>::shippedDate::</td>';
  html += '<td>::deliveredDate::</td>';
  html += '</tr>';
  html += '</table>';
  html += '</div>';

  return html;
}
