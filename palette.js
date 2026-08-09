(function () {
  var root = document.documentElement;
  var select = document.getElementById("palette-select");

  // Sync the dropdown to whatever the inline head script already set,
  // so it reflects saved/OS preference on first paint.
  select.value = root.getAttribute("data-palette");

  select.addEventListener("change", function () {
    root.setAttribute("data-palette", select.value);
    localStorage.setItem("hamilin-palette", select.value);
  });
})();
