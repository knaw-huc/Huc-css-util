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
