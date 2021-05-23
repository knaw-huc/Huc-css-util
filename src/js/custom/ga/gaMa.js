let splitInterfaceVal = true;

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




function splitInterface(splitInterfaceVal) {
  if (splitInterfaceVal) {
    document.getElementById('splitGa').classList.add("gaSplitCol");
  } else {
    document.getElementById('splitGa').classList.remove("gaSplitCol");
  }
}



function myFunction(x) {
  // if (x.matches) { // If media query matches
  //   document.body.style.backgroundColor = "yellow";
  // } else {
  //   document.body.style.backgroundColor = "pink";
  // }
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes
