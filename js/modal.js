var $ = require("jquery");

this.toggleShow = function(selector) {
  $(selector).toggleClass("modal--hide");
  console.log("MODAL TOGGLED");
}
