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
      number[x].textContent = (parseInt(number[x], 10) + n).toString();
    }
  }
}
