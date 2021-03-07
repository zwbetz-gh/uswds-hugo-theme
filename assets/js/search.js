(function () {
  let blogList = null;
  let blogListFiltered = null;

  const getSearchEl = () => document.querySelector('#search');

  const getListCountEl = () => document.querySelector('#list-count');

  const getListEl = () => document.querySelector('#list');

  const disableSearchEl = () => {
    getSearchEl().disabled = true;
    getSearchEl().placeholder = 'Loading...';
  };

  const enableSearchEl = () => {
    getSearchEl().disabled = false;
    getSearchEl().placeholder = '{{ site.Data.constants.search_label }}';
  };

  const fetchJson = () => {
    disableSearchEl();
    const url = `${window.location.origin}/index.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        blogList = data.blog;
        blogListFiltered = data.blog;
        enableSearchEl();
      });
  };

  const filter = () => {
    const searchTerm = getSearchEl().value.toUpperCase();
    blogListFiltered = blogList.filter((item) => {
      const title = item.Title.toUpperCase();
      const content = item.PlainContent.toUpperCase();
      const publishDate = item.PublishDateFormatted.toUpperCase();
      return title.includes(searchTerm) || content.includes(searchTerm) || publishDate.includes(searchTerm);
    });
  };

  const render = () => {
    const newList = document.createElement('ul');
    newList.id = 'list';

    blogListFiltered.forEach((item) => {
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

    const count = `Count: ${blogListFiltered.length}`;
    getListCountEl().textContent = count;

    const oldList = getListEl();
    oldList.replaceWith(newList);
  };

  const handleKeyupEvent = () => {
    filter();
    render();
  };

  const main = () => {
    if (getSearchEl()) {
      fetchJson();
      getSearchEl().addEventListener('keyup', handleKeyupEvent);
    }
  };

  main();
})();
