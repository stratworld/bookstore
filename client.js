async function get (path) {
  return (await fetch(path)).json();
}

function getFactory (path) {
  return () => get(path);
}

const API = {
  getBooks: getFactory('api/books')
};

async function app () {
  const books = await API.getBooks();
  const booksElement = document.querySelector('#books');
  books.map(createBookElement)
    .forEach(bookElement => booksElement.appendChild(bookElement));
}

function createBookElement (bookJson) {
  const bookElement = document.createElement('div');
  const titleContainer = document.createElement('i');
  if (bookJson.sale) {
    titleContainer.className = 'sale';
  }
  const titleElement = document.createTextNode(bookJson.name);
  titleContainer.appendChild(titleElement);
  const author = document.createElement('div');
  const authorText = document.createTextNode(`by ${bookJson.author}`);
  author.appendChild(authorText);
  bookElement.appendChild(titleContainer);
  bookElement.appendChild(author);
  bookElement.appendChild(document.createElement('br'))
  return bookElement;
}

app();