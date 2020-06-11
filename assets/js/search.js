(function () {
  function updateCount(count) {
    var listCount = document.getElementById("list-count");
    listCount.innerText = "Count: " + count;
  }

  function onEvent() {
    var count = 0;
    var filter = search.value.toUpperCase();
    var list = document.getElementById("list");
    var listItems = list.getElementsByTagName("li");
    for (i = 0; i < listItems.length; i++) {
      var item = listItems[i];
      var text = item.innerText.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
        count++;
      } else {
        item.style.display = "none";
      }
    }
    updateCount(count);
  }

  var search = document.getElementById("search");
  if (search) {
    search.addEventListener("keyup", onEvent);
  }
})();
