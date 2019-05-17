// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");

var template = dot.compile(require("./_info.html"));

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

qsa(".st-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
    document.querySelector(".details").innerHTML = template(data[e.target.parentElement.id]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
  });
});

var options = Object.keys(window.data);

qsa(".goto").forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		var selected = document.querySelector(".selected").id;
		var selectedIndex = selected ? options.indexOf(selected) : -1;
		if (e.target.classList.contains("back")) {
			selectedIndex = Math.max(0, selectedIndex - 1);
		} else {
			selectedIndex = Math.min(options.length - 1, selectedIndex + 1);
		}

		document.querySelector(".details").innerHTML = template(data[options[selectedIndex]]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    document.querySelector("#" + options[selectedIndex]).classList.add("selected");
	});
});
