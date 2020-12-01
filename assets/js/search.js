(function () {
  let searchElement = null;
  let count = null;

  function updateDisplayedCount() {
    const listCount = document.querySelector('#list-count');
    listCount.innerText = 'Count: ' + count;
  }

  function filterListItem(listItem) {
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
    const listItems = document.querySelectorAll('#list li');
    for (i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
      filterListItem(listItem);
    }
  }

  function handleEvent() {
    count = 0;
    filterListItems();
    updateDisplayedCount();
  }

  function main() {
    searchElement = document.querySelector('#search');
    if (searchElement) {
      searchElement.addEventListener('keyup', handleEvent);
    }
  }

  main();
})();
