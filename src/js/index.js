

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

var customStartPointAnimation = new Motus.Animation(
	new Motus.Point(document.querySelector(".mathods__main-wrap")), // start point DOM element
	new Motus.Point(document.querySelector(".fast-order")), // end point DOM element
	document.querySelector(".methods__circle"), // element that will animated
	{
			// 0:{
			// 	marginLeft: "10px"
			// },
			50: {
				marginLeft: "10px"
			},
			65: {
				marginLeft: "300px"
			},
			78: {
				marginTop: "400px"
			}
	}
);
Motus.addAnimation(customStartPointAnimation);