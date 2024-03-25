function fetchBooks() {
  // Return the fetch call so that it's promise can be accessed outside
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convert the response to JSON
      return response.json();
    })
    .then(data => {
      // Call renderBooks with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      // Log any errors to the console
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
