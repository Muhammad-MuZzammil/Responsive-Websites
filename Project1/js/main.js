// header-nav
$(document).ready(function () {
  var sideMenu = $("#menuBar")
  $("#menuBar").click(function () {
    var arr = sideMenu[0].attributes[6]
    if (arr.value === 'false') {
      $(".headerNavForm").hide();
    }
    else {
      $(".headerNavForm").show();
    }
  })
})