(function() {
  var sponsors = document.querySelector(".sponsors");

  setInterval(function() {
    var first = sponsors.children[0];

    sponsors.removeChild(first);
    sponsors.appendChild(first);
  }, 2500);

  var announcements = document.querySelector(".announcements > iframe");

  setTimeout(function() {
    announcements.style.height = document.body.offsetHeight + "px";
  }, 250);
})();
