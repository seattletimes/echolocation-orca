// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");

var template = dot.compile(require("./_info.html"));

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

qsa(".st-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
    document.querySelector(".info").innerHTML = template(data[e.target.parentElement.id]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
  });
});