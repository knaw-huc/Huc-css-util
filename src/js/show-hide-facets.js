var facetsOpen = false;

var clFacets = document.querySelectorAll("#showFacets");
  for (i = 0; i < clFacets.length; i++) {

    clFacets[i].addEventListener('click', function() {
      if (facetsOpen ==true) {
        facetsOpen = false;
      } else {
        facetsOpen = true;
      }
      handleMenu();

    });
}

function handleMenu() {
  if (facetsOpen == true) {
    document.getElementById("hcLayoutFacetsToggel").style.display = "flex";
  }
  if (facetsOpen == false) {
    document.getElementById("hcLayoutFacetsToggel").style.display = "none";
  }
}

function checkFacetsSize() {
  if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById("hcLayoutFacetsToggel").style.display = "flex";
    }
}

window.addEventListener("resize", checkFacetsSize);
