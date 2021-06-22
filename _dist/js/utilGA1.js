// use .hcTabLabel for labels
// use .hcTabContent for the content divs.

// use a unique id with both pre codes
var preListVal = "tab-list-";
var preContentVal = "tab-content-";

//go through al buttons
var handleTabLabel = document.querySelectorAll(".hcTabLabel");
for (i = 0; i < handleTabLabel.length; i++) {
  var selectedTab = handleTabLabel[i];
  if (i==0) {
    var firstTabId = selectedTab.getAttribute('id');
  }
  handleTabLabel[i].addEventListener('click', handleTabs, selectedTab);
}


//handle the name of the tab
function handleTabs(selectedTab) {
  // hide all
  hideTabContent();

  var elementId = selectedTab.srcElement.id;
  var tabCore = elementId.replace(preListVal, "");
  makeTabVisable(tabCore);
  seletedLabel(tabCore)
}

// make one tab visable by core ID
function makeTabVisable(contentId) {
  document.getElementById(preContentVal+contentId).style.display= 'block';
}

// hide all tabs
function hideTabContent() {
  var handleTabVis = document.querySelectorAll(".hcTabContent");
    for (i = 0; i < handleTabVis.length; i++) {
      handleTabVis[i].style.display= 'none';
  }
}

// show the first tab
function firstTabVisable() {
  hideTabContent();
  // style the tab
  document.getElementById(firstTabId).classList.add('hcSelectedTab');
  //document.getElementById(firstTabId).classList.add('colorBgGrey');

  var firstTabCore = firstTabId.replace(preListVal, "");
  makeTabVisable(firstTabCore);

}

function seletedLabel(contentId) {
  for (i = 0; i < handleTabLabel.length; i++) {
    handleTabLabel[i].classList.remove('hcSelectedTab');
    //handleTabLabel[i].classList.remove('colorBgGrey');
  }
  document.getElementById(preListVal+contentId).classList.add('hcSelectedTab');
  //document.getElementById(preListVal+contentId).classList.add('colorBgGrey');
}


firstTabVisable();

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
