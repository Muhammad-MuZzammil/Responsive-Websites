// START HOME
$(document).ready(function () {
        $(".sideBar").hide()

    var sideBar = false;
    if (sideBar == false) {
        
        sideBar = true;

    }
    $(".menuBarBtn").click(function () {
        
        $(".sideBar").removeClass("animated slideOutLeft")
        
        if (sideBar == true) {
            $(".sideBar").show().addClass("animated slideInLeft")
            sideBar = false;
        }
    })
    $(".sideBar").click(function () {
        $(".sideBar").hide()
        
        
        if (sideBar == false) {
        $(".sideBar").addClass("animated slideOutLeft")
            
            sideBar = true;
        }
        // $(".sideBar").hide()
        
    })
})
// END HOME


// Start Food Steps
$(document).ready(function(){
            $(".img-content").hide()
    
        var arrowbtn = false 
    $(".fa-play").click(function(){
        if (arrowbtn == true) {
        $(".fa-sort-desc").removeClass("fa-sort-desc")
        $(".title .fa").addClass("fa-play")
            $(".img-content").hide()
        
        arrowbtn = false; 
        }
        else {
        $(".fa-play").removeClass("fa-play")
            $(".title .fa").addClass("fa-sort-desc")
            $(".img-content").show()
        arrowbtn = true; 
        }
    })
       
})
// End Food Steps
