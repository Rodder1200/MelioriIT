// $(document).ready(function() {
//   $(".methods").on("scroll", function(e) {
//     $(".methods__circle").animate({
// 			left: "40%"
// 		}, 1000, function() {
// 			// Animation complete.
// 		});
//   });
//   // $(".methods").on("mouseleave", function(e) {
//   //   $(".methods__circle").removeClass("animate-circle");
//   // });
// });

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var customStartPointAnimation = new Motus.Animation(
  new Motus.Point(document.querySelector(".mathods__main-wrap")), // start point DOM element
  new Motus.Point(document.querySelector(".fast-order")), // end point DOM element
  document.querySelector(".methods__circle"), // element that will animated
  {
    // 0:{
    // 	marginLeft: "10px"
    // },
    30: {
      marginLeft: "100px"
    },
    70: {
      marginLeft: windowWidth - 500 + "px"
    },
    85: {
      marginTop: windowHeight - 500 + "px"
    }
  }
);
Motus.addAnimation(customStartPointAnimation);
