let splitInterfaceVal = false;

document.getElementById('hcCodeEditor').style.display= 'none';
document.getElementById('qb').classList.add("bgColorBrand1");


var togEl = document.querySelectorAll(".hcGaTog1");
for (i = 0; i < togEl.length; i++) {
  togEl[i].addEventListener('click', toggIn);
}

function toggIn() {
  console.log(this.id);
  if (this.id == 'qb') {
    document.getElementById('hcQueryBuilder').style.display= 'flex';
    document.getElementById('hcCodeEditor').style.display= 'none';

    document.getElementById('qb').classList.add("bgColorBrand1");
    document.getElementById('sce').classList.remove("bgColorBrand1");
  }
  if (this.id == 'sce') {
    document.getElementById('hcCodeEditor').style.display= 'flex';
    document.getElementById('hcQueryBuilder').style.display= 'none';

    document.getElementById('sce').classList.add("bgColorBrand1");
    document.getElementById('qb').classList.remove("bgColorBrand1");
  }
}


function splitToggle() {
  if (splitInterfaceVal) {
    splitInterfaceVal = false;
  } else {
    splitInterfaceVal = true;
  }
console.log('v=',splitInterfaceVal);

  splitInterface(splitInterfaceVal);
}



//hcGaPanelRight
function splitInterface(splitInterfaceVal) {
  if (splitInterfaceVal) {
    // column
    document.getElementById('splitGa').classList.add("gaSplitCol");
    document.getElementById('b_splitToggle').setAttribute("src", "images/custom/ga-agent/b_toggle_Row.png");
    document.getElementById('hcGaPanelRight').style.maxWidth='100%';
  } else {
    // rows
    document.getElementById('splitGa').classList.remove("gaSplitCol");
    document.getElementById('b_splitToggle').setAttribute("src", "images/custom/ga-agent/b_toggle_Col.png");
    document.getElementById('hcGaPanelRight').style.maxWidth='50vw';
    if (x.matches) { // If media query matches
      document.getElementById('hcGaPanelRight').style.maxWidth='100%';
    }
  }
}



function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('b_splitToggle').style.display= 'none';

  } else {
    document.getElementById('b_splitToggle').style.display= 'flex';
  }
}

var x = window.matchMedia("(max-width: 1300px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


function closeMsg() {
  document.getElementById('msg01').style.display= 'none';
}

let timer;
removeMsg();
function removeMsg() {
  timer = setTimeout(closeMsg, 10000);
}
