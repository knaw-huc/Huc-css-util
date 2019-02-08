var focusOnFormItem = document.querySelectorAll(".hcpr");
for (i = 0; i < focusOnFormItem.length; i++) {
  //alert('open');
  focusOnFormItem[i].addEventListener('focus', function() {
    document.querySelector('.hcProvenanceComp').style.display = "flex";

  });
}
