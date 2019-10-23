(function() {
  var s = '.parameters [type="checkbox"]';
  var a = document.querySelector(s).checked;
  document.querySelectorAll(s).forEach(i => i.checked = !a)
})();