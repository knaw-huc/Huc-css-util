var preCodeItems = document.getElementsByTagName("code");


for (c = 0; c < preCodeItems.length; c++) {

  var  codeInner = preCodeItems[c].innerHTML;
  codeInner = codeInner.replace(/</g, "&#60;");
  codeInner = codeInner.replace(/>/g, "&#62;");
  codeInner = codeInner.replace(/                  /g, "");


  codeInner = codeInner.replace(/####~/g, '<span class="codeRepeat">');
  codeInner = codeInner.replace(/~####/g, '</span>');

  codeInner = codeInner.replace(/###~/g, '<span class="codeComment">');
  codeInner = codeInner.replace(/~###/g, '</span>');

  codeInner = codeInner.replace(/##~/g, '<span class="codeEmp">');
  codeInner = codeInner.replace(/~##/g, '</span>');

  preCodeItems[c].innerHTML = codeInner;
}
