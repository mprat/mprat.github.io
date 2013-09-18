$(document).ready(function() {
	var techobj = document.getElementById("tech");
	var artobj = document.getElementById("art");
	var edobj = document.getElementById("ed");
	var ax = techobj.offsetLeft;
	var ay = techobj.offsetTop;
	var bx = artobj.offsetLeft;
	var by = artobj.offsetTop;
	var cx = edobj.offsetLeft;
	var cy = edobj.offsetTop;
	var projects = d3.selectAll("div.project")
	var dataarr = [];
	for (var i = document.getElementsByClassName("project").length - 1; i >= 0; i--) {
		var proji = document.getElementsByClassName("project")[i];
		dataarr.push({"tech": proji.getAttribute("data-tech"), "art": proji.getAttribute("data-art"), "ed": proji.getAttribute("data-ed"), "name": proji.getAttribute("id")})
	};
	projects.data(dataarr)
			.style("left", function(d){
				var l = ((ax*ax - bx*bx + ay*ay - by*by + 2*100*(d["tech"] - d["art"]))*(ay - cy) + (ax*ax - cx*cx + ay*ay - cy*cy + 2*100*(d["tech"] - d["ed"]))*(by - ay)) / (2 * ((ax - bx)*(ay - cy) - (ax - cx)*(ay - by))) + "px";
				console.log("left = ", l);
				return l;
			})
			.style("top", function(d){
				var t = ((ax*ax - bx*bx + ay*ay - by*by + 2*100*(d["tech"] - d["art"]))*(cx - ax) + (ax*ax - cx*cx + ay*ay - cy*cy + 2*100*(d["tech"] - d["ed"]))*(ax - bx)) / (2 * ((ax - bx)*(ay - cy) - (ax - cx)*(ay - by))) + "px";
				console.log("top = ", t);
				return t;
			})
});