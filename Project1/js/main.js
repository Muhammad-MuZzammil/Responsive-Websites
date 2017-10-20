// header-nav
$(document).ready(function () {
  var sideMenu = $("#menuBar")
  // var sideMenu = false;
  $("#menuBar").click(function () {
    // sideMenu = true;
    console.log($("#menuBar").attr("aria-expanded", "true"))
    console.log(sideMenu[0])
    // if ($("#menuBar").attr("aria-expanded", "true")) {
    //   $(".headerNavForm").hide();
    // }
    // if ($("#menuBar").attr("aria-expanded", "false")) {
    //   $(".headerNavForm").show();
    // }

  })
})