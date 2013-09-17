$(document).ready(function() {
	var scalefactor = 4;
	d3.select("body").selectAll("div.main-concept")
			.data([[100, 0, 0], [0, 100, 0], [0, 0, 100]])
		// .enter().append("div.main-concept")
			// .style("position", "absolute")
			// .style("left", function(d){
				// return scalefactor*d[0]+"px";
			// })
			// .style("top", function(d){
				// return scalefactor*d[1]+"px"
			// })

	d3.select("body").selectAll("div.project")
			.data([[50, 50, 50]])

	d3.select("body").selectAll("div.project, div.main-concept")
			.style("position", "absolute")
			.style("left", function(d){
				return scalefactor*d[0]+"px";
			})
			.style("top", function(d){
				return scalefactor*d[1]+"px"
			})


});