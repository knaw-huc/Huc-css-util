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
  document.getElementById(firstTabId).classList.add('colorBgGrey');

  var firstTabCore = firstTabId.replace(preListVal, "");
  makeTabVisable(firstTabCore);

}

function seletedLabel(contentId) {
  for (i = 0; i < handleTabLabel.length; i++) {
    handleTabLabel[i].classList.remove('hcSelectedTab');
    handleTabLabel[i].classList.remove('colorBgGrey');
  }
  document.getElementById(preListVal+contentId).classList.add('hcSelectedTab');
  document.getElementById(preListVal+contentId).classList.add('colorBgGrey');
}


firstTabVisable();
