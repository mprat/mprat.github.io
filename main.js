$(document).ready(function() {
	// var techobj = document.getElementById("tech");
	// var artobj = document.getElementById("art");
	// var edobj = document.getElementById("ed");
	// var projects = d3.selectAll("div.project")
	// var dataarr = [];
	// for (var i = document.getElementsByClassName("project").length - 1; i >= 0; i--) {
	// 	var proji = document.getElementsByClassName("project")[i];
	// 	dataarr.push({"tech": proji.getAttribute("data-tech"), "art": proji.getAttribute("data-art"), "ed": proji.getAttribute("data-ed"), "name": proji.getAttribute("id")})
	// };
	// projects.data(dataarr)
	// 		.style("left", function(d){
	// 			// var l = ((ax*ax - bx*bx + ay*ay - by*by + 2*100*(d["tech"] - d["art"]))*(ay - cy) + (ax*ax - cx*cx + ay*ay - cy*cy + 2*100*(d["tech"] - d["ed"]))*(by - ay)) / (2 * ((ax - bx)*(ay - cy) - (ax - cx)*(ay - by))) + "px";
	// 			// console.log("left = ", l);
	// 			// return l;
	// 			return "100px"
	// 		})
	// 		.style("top", function(d){
	// 			// var t = ((ax*ax - bx*bx + ay*ay - by*by + 2*100*(d["tech"] - d["art"]))*(cx - ax) + (ax*ax - cx*cx + ay*ay - cy*cy + 2*100*(d["tech"] - d["ed"]))*(ax - bx)) / (2 * ((ax - bx)*(ay - cy) - (ax - cx)*(ay - by))) + "px";
	// 			// console.log("top = ", t);
	// 			// return t;
	// 			return "100px"
	// 		})

	//randomly generate position for projects
	// var techobj = document.getElementById("tech");
	// var artobj = document.getElementById("art");
	// var edobj = document.getElementById("ed");
	// var ax = techobj.offsetLeft;
	// var ay = techobj.offsetTop;
	// var bx = artobj.offsetLeft;
	// var by = artobj.offsetTop;
	// var cx = edobj.offsetLeft;
	// var cy = edobj.offsetTop;
	// var triangle_center_x = (ax + bx + cx) / 2;
	// var triangle_center_y = (ay + by + cy) / 2;
	// var plus_or_minus = function(num){
	// 	var r = Math.random();
	// 	return -1*num*(r < 0.5) + num*(r > 0.5);
	// };
	// var add_center = function(proj, center){
	// 	$(proj).css("left", center.x);
	// 	$(proj).css("top", center.y);
	// };
	// var check_center = function(proj, center){
	// 	return ((Math.pow(projects[j].style.left - center.x, 2) + Math.pow(projects[j].style.top - center.y, 2)) > Math.pow(projects[j].width, 2))
	// };
	// var dist = function(x1, y1, x2, y2){
	// 	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
	// };

	// var projects = document.getElementsByClassName("project");
	// for (var i = projects.length - 1; i >= 0; i--) {
	// 	projects[i].getAttribute("data-tech");
	// 	projects[i].getAttribute("data-art");
	// 	projects[i].getAttribute("data-ed");
	// 	if (i == projects.length - 1){
	// 		var test_center = {"x": triangle_center_x, "y": triangle_center_y};
	// 		// test_center.x += plus_or_minus(Math.random() * 40);
	// 		// test_center.y += plus_or_minus(Math.random() * 40);
	// 		add_center(projects[i], test_center);
	// 	} else {
			
			// var test_center = {"x": triangle_center_x, "y": triangle_center_y};
			// for (var j = projects.length - 1; j > i; j--) {
			// 	// check_center(projects[j], test_center);
			// 	if (check_center(projects[j], test_center)){
			// 		break;
			// 	} else {
			// 		console.log("overlap");
			// 		//draw line between two centers
			// 		var line = function(x){
			// 			return (((projects[j].offsetTop - test_center.y) / (projects[j].offsetLeft - test_center.x))*(x - projects[j].offsetLeft) + projects[j].offsetTop)
			// 		};
			// 		var distbtw = dist(projects[j].offsetLeft, test_center.x, projects[j].offsetTop, test_center.y);
			// 		//move circles in opposite directions along the line
			// 		// while (!(check_center(projects[j], test_center))){
			// 		// 	test_center.x += 10;
			// 		// 	projects[j].offsetLeft -= 10;
			// 		// }
			// 		// do{
			// 			// test_center.x += 10;
			// 			// projects[j].offsetLeft -= 10;
			// 		// } while (!(check_center(projects[j], test_center)))
			// 	}
			// };
			// add_center(projects[i], test_center);
	// 	}
	// };

	//initially hide all project details so you can toggle their display later
	$(".detail-display").hide();

	$('.project').click(function(){
		$("#" + $(this).attr("id") +"-detail").toggle();
		$(".detail-container").toggle();
		$(".home-container").hide();
	});

	$('.main-concept').click(function(){
		console.log($(this).attr("id"));
	});

	$('.home-btn').click(function(){
		$('.detail-display').hide();
		$(".home-container").show();
	});
});