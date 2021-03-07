(function () {
  const SEARCH_ID = 'search';
  const COUNT_ID = 'count';
  const LIST_ID = 'list';

  let list = null;
  let listFiltered = null;

  const getDuration = (startTime, endTime) => (endTime - startTime).toFixed(2);

  const getSearchEl = () => document.getElementById(SEARCH_ID);
  const getCountEl = () => document.getElementById(COUNT_ID);
  const getListEl = () => document.getElementById(LIST_ID);

  const disableSearchEl = () => {
    getSearchEl().disabled = true;
    getSearchEl().placeholder = 'Loading ...';
  };

  const enableSearchEl = () => {
    getSearchEl().disabled = false;
    getSearchEl().placeholder = '{{ site.Data.constants.search_label }}';
  };

  const fetchJson = () => {
    const startTime = performance.now();
    disableSearchEl();
    const url = `${window.location.origin}/index.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        list = data.blog;
        listFiltered = data.blog;
        enableSearchEl();
        console.log(
          `fetchJson took ${getDuration(startTime, performance.now())} ms`
        );
      });
  };

  const filterList = () => {
    const searchTerm = getSearchEl().value.toUpperCase();
    listFiltered = list.filter((item) => {
      const title = item.Title.toUpperCase();
      const content = item.PlainContent.toUpperCase();
      const publishDate = item.PublishDateFormatted.toUpperCase();
      return (
        title.includes(searchTerm) ||
        content.includes(searchTerm) ||
        publishDate.includes(searchTerm)
      );
    });
  };

  const renderCount = () => {
    const count = `Count: ${listFiltered.length}`;
    getCountEl().textContent = count;
  };

  const renderList = () => {
    const newList = document.createElement('ul');
    newList.id = LIST_ID;

    listFiltered.forEach((item) => {
      const li = document.createElement('li');

      const publishDate = document.createElement('span');
      publishDate.className = 'text-gray-50';
      publishDate.textContent = item.PublishDateFormatted;

      const titleLink = document.createElement('a');
      titleLink.href = item.RelPermalink;
      titleLink.textContent = item.Title;

      li.appendChild(publishDate);
      li.appendChild(document.createTextNode(' '));
      li.appendChild(titleLink);

      newList.appendChild(li);
    });

    const oldList = getListEl();
    oldList.replaceWith(newList);
  };

  const handleKeyupEvent = () => {
    const startTime = performance.now();
    filterList();
    renderCount();
    renderList();
    console.log(
      `handleKeyupEvent took ${getDuration(startTime, performance.now())} ms`
    );
  };

  const main = () => {
    if (getSearchEl()) {
      fetchJson();
      getSearchEl().addEventListener('keyup', handleKeyupEvent);
    }
  };

  main();
})();
