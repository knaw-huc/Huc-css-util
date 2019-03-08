var preCodeItems = document.getElementsByTagName("code");


for (c = 0; c < preCodeItems.length; c++) {
  //preCodeItems[c].style.backgroundColor = "red";
  var  codeInner = preCodeItems[c].innerHTML;
  var codeInner = codeInner.replace(/</g, "&#60;");
  var codeInner = codeInner.replace(/>/g, "&#62;");
  preCodeItems[c].innerHTML = codeInner;
}
