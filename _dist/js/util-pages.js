// get all headers 2 and 3.
var destination = 'navigationFromHeaders';
var elementTags = 'h2,h3';


var elems = document.querySelectorAll(elementTags);


// add anchor link to each header
for (var i = 0; i < elems.length; i++) {
    var hId = elems[i].getAttribute( 'id' );
    document.body.innerHTML = document.body.innerHTML.replace('<h2 id="'+hId, '<a id="l'+hId+'"></a><h2 id="'+hId);
    document.body.innerHTML = document.body.innerHTML.replace('<h3 id="'+hId, '<a id="l'+hId+'"></a><h3 id="'+hId);
}


// Generate a navigation list
var headerNavigation = '';
var linkClass = '';
for (var i = 0; i < elems.length; i++) {
    linkClass = '';
    var hId = elems[i].getAttribute( 'id' );
    var hTxt = elems[i].innerText; // not working in ie: Use Id replace hyphens
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)))
      {
        hTxt = hId.replace('-', ' ')
      }
    var hTag = elems[i].tagName;

    // distinct subnav
    if (hTag == 'H3') {
      linkClass= 'sub';
    }

    headerNavigation = headerNavigation+'<a href="#l'+hId+'" class="'+linkClass+'">'+hTxt+'</a>';
}

document.getElementById(destination).innerHTML = headerNavigation;

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
