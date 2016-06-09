//Make waypoint on red-box div, library agnostic (no jquery)
// var redWaypoint = new Waypoint({
//     element: document.getElementById("red-box"),
//     handler: function(){
//         console.log("hit red box waypoint")
//     }
// })

//Make way point on red-box div, jquery
var redWaypoint = $("#red-box").waypoint({
    handler: function () {
        console.log("hit red box waypoint")
    }
})

//Use 'direction' argument to make waypoint behave differently when scrolling down vs up
var blueWaypoint = $("#blue-box").waypoint({
    handler: function (direction) {
        if (direction === "down") {
            $(this.element).removeClass("rollIn")
            $(this.element).addClass("rollOut")
        }
        else {
            $(this.element).removeClass("rollOut")
            $(this.element).addClass("rollIn")
        }
    }
})

//Use 'offset' property to change when the waypoint function is triggered
var greenWaypoint = $("#green-box").waypoint({
    handler: function () {
        console.log("hit green box waypoint")
    },
    offset: 200
    //Offset can also be a percentage (of viewport height)
    //or a function that returns a number of pixels
    //or the string "bottom-in-view" --a shortcut for when the bottom of the element hits the bottom of the viewport

})