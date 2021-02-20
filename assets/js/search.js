(function () {
  let blogList = null;
  let blogListFiltered = null;

  function getSearchEl() {
    return document.querySelector('#search');
  }

  function getListCountEl() {
    return document.querySelector('#list-count');
  }

  function getListEl() {
    return document.querySelector('#list');
  }

  function disableSearchEl() {
    getSearchEl().disabled = true;
    getSearchEl().placeholder = 'Loading...';
  }

  function enableSearchEl() {
    getSearchEl().disabled = false;
    getSearchEl().placeholder = 'Search by title or content';
  }

  function fetchJson() {
    disableSearchEl();
    const url = `${window.location.origin}/index.json`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        blogList = data.blog;
        blogListFiltered = data.blog;
        enableSearchEl();
      });
  }

  function render() {
    const ul = document.createElement('ul');
    ul.id = 'list';

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

      ul.appendChild(li);

      const count = `Count: ${blogListFiltered.length}`;
      getListCountEl().textContent = count;
    });

    let list = getListEl();
    list.replaceWith(ul);
  }

  function filter() {
    const searchTerm = getSearchEl().value.toUpperCase();
    blogListFiltered = blogList.filter((item) => {
      const title = item.Title.toUpperCase();
      const content = item.PlainContent.toUpperCase();
      return title.includes(searchTerm) || content.includes(searchTerm);
    });
  }

  function handleKeyupEvent() {
    filter();
    render();
  }

  function main() {
    if (getSearchEl()) {
      fetchJson();
      getSearchEl().addEventListener('keyup', handleKeyupEvent);
    }
  }

  main();
})();
