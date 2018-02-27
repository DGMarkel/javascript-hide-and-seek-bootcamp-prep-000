function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
   let start = parseInt(lis[i].innerHTML);
   lis[i].innerHTML = start + n;
  }
}

function deepestChild() {
  let nodelist = document.getElementById('app').querySelectorAll('div#grand-node div');
  return nodelist[nodelist.length - 1];
}
