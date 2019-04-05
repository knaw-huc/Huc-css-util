// .hcTabLabel
// .hcTabContent

var handleTabLabel = document.querySelectorAll(".hcTabLabel");
  for (i = 0; i < handleTabLabel.length; i++) {
    var selectedTab = handleTabLabel[i];//.getAttribute('id');
    handleTabLabel[i].addEventListener('click', handleTabs, selectedTab);
}

function handleTabs(selectedTab) {
  console.log(selectedTab);
}
