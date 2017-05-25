// START HOME
$(window).resize(function (e) { $('#home').height(window.innerHeight) });
$(window).resize(function (e) { $('.home-container').height(window.innerHeight) });

$(window).resize(function (e) { $('.header-row').width(window.innerWidth) });
// $('#home').height(window.innerHeight)
// END HOME



// $(document).ready(function () {


//     var sideBar = false;
//     // $(".sideBar").toggleClass("animated slideOutLeft");

//     if (sideBar == false) {
//                 sideBar = true;
//         $(".sideBar").hide("fast").addClass("animated slideOutLeft")


//     }
//     $(".menuBarBtn").click(function () {

//         $(".sideBar").removeClass("animated slideOutLeft")
//         if (sideBar == true) {
//             $(".sideBar").show("fast").addClass("animated slideInLeft")

//             sideBar = false;


//         }
//         else {
//                 $(".frontSideBar").addClass("animated slideOutLeft")

//                 sideBar = true;


//         }
//     })
// })
$(document).ready(function () {

    var sideBar = false;
    if (sideBar == false) {
        $(".sideBar").hide()
        sideBar = true;

    }
    $(".menuBarBtn").click(function () {
        
        $(".sideBar").removeClass("animated slideOutLeft")
        
        if (sideBar == true) {
            $(".sideBar").show("slow").addClass("animated slideInLeft")
            sideBar = false;
        }
    })
    $(".sideBar").click(function () {
        
        if (sideBar == false) {
        $(".sideBar").addClass("animated slideOutLeft")
            
            // $(".sideBar").addClass("animated slideOutLeft")
            sideBar = true;
        }
    })
})