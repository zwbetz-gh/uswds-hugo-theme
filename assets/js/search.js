(function () {
  const SEARCH_ID = 'search';
  const REGEX_MODE_ID = 'regex_mode';
  const COUNT_ID = 'count';
  const LIST_ID = 'list';

  let list = null;
  let filteredList = null;

  const logPerformance = (work, startTime, endTime) => {
    const duration = (endTime - startTime).toFixed(2);
    console.log(`${work} took ${duration} ms`);
  };

  const getSearchEl = () => document.getElementById(SEARCH_ID);
  const getRegexModeEl = () => document.getElementById(REGEX_MODE_ID);
  const getCountEl = () => document.getElementById(COUNT_ID);
  const getListEl = () => document.getElementById(LIST_ID);

  const disableSearchEl = () => {
    getSearchEl().disabled = true;
    getSearchEl().placeholder = 'Loading ...';
  };

  const enableSearchEl = () => {
    getSearchEl().disabled = false;
    getSearchEl().placeholder =
      'Case-insensitive search by title, content, or publish date';
  };

  const fetchJson = () => {
    const startTime = performance.now();
    disableSearchEl();
    const url = `${window.location.origin}/index.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        list = data.blog;
        filteredList = data.blog;
        enableSearchEl();
        logPerformance('fetchJson', startTime, performance.now());
      })
      .catch(error =>
        console.error(`Failed to fetch JSON index: ${error.message}`)
      );
  };

  const filterList = regexMode => {
    const regexQuery = new RegExp(getSearchEl().value, 'i');
    const query = getSearchEl().value.toUpperCase();
    filteredList = list.filter(item => {
      const title = item.Title.toUpperCase();
      const content = item.PlainContent.toUpperCase();
      const publishDate = item.PublishDateFormatted.toUpperCase();
      if (regexMode) {
        return (
          regexQuery.test(title) ||
          regexQuery.test(content) ||
          regexQuery.test(publishDate)
        );
      } else {
        return (
          title.includes(query) ||
          content.includes(query) ||
          publishDate.includes(query)
        );
      }
    });
  };

  const renderCount = () => {
    const count = `Count: ${filteredList.length}`;
    getCountEl().textContent = count;
  };

  const renderList = () => {
    const newList = document.createElement('ul');
    newList.id = LIST_ID;

    filteredList.forEach(item => {
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

  const handleEvent = () => {
    const startTime = performance.now();
    const regexMode = getRegexModeEl().checked;
    filterList(regexMode);
    renderCount();
    renderList();
    logPerformance('handleEvent', startTime, performance.now());
  };

  const addEventListeners = () => {
    getSearchEl().addEventListener('keyup', handleEvent);
    getRegexModeEl().addEventListener('change', handleEvent);
  };

  const main = () => {
    if (getSearchEl()) {
      fetchJson();
      addEventListeners();
    }
  };

  main();
})();
