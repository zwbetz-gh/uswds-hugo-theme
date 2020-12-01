(function () {
  function getSearchElement() {
    return document.querySelector('#search');
  }

  function updateDisplayedCount(count) {
    const listCount = document.querySelector('#list-count');
    listCount.innerText = 'Count: ' + count;
  }

  function filterListItem(listItem, count) {
    const searchElement = getSearchElement();
    const searchTerm = searchElement.value.toUpperCase();
    const text = listItem.innerText.toUpperCase();
    if (text.includes(searchTerm)) {
      listItem.style.display = '';
      count++;
    } else {
      listItem.style.display = 'none';
    }
  }

  function filterListItems() {
    count = 0;
    const listItems = document.querySelectorAll('#list li');
    for (i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
      filterListItem(listItem, count);
    }
  }

  function handleEvent() {
    filterListItems();
    updateDisplayedCount();
  }

  function main() {
    searchElement = getSearchElement();
    if (searchElement) {
      searchElement.addEventListener('keyup', handleEvent);
    }
  }

  main();
})();
