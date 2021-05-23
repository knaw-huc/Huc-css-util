function findInList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("contentList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    let showItems = false;
    let inner = li[i].getElementsByClassName('tag')


    for (var j = 0; j < inner.length; j++) {
      txtValue = inner[j].innerHTML
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        showItems = true;
      }

    }

    // hide items if found
    if (showItems) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }


  }
}
