function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nested = document.getElementById('nested');
  return nested.getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var rankedList = document.getElementsByClassName("ranked-list");
  var number;
  for (var i = 0; i < rankedList.length; i++) {
    number = rankedList[i].getElementsByTagName("li");
    for (var x = 0; x < number.length; x++) {
      number[x].textContent = (parseInt(number[x].textContent, 10) + n).toString();
    }
  }
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  var div = grandNode.getElementsByTagName("div");
  return div[div.length - 1];
}
