function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nested = document.getElementById('nested');
  return nested.getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const rankedList = document.getElementsByClassName(`ranked-list`);
  for (var i = 0; i < rankedList.length; i++) {
    for (var x = 0; x < (rankedList[i].children).length; x++) {
      (rankedList[i].children[x]).textContent = parseInt((rankedList[i].children[x]).getElementsByTagName(`li`)[x]) + n;
    }
  }
}
