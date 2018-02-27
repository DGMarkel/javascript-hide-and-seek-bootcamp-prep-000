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
  let current = document.getElementById('app').querySelectorAll('div#grand-node');
  let next = [];

  while (current) {
    if (current.innerHTML === 'boo!') {
      return current;
    }

    for (let i = 0; i < current.length; i++) {
      next.push(current[i]);
    }
  }
    current = next.shift();
}
