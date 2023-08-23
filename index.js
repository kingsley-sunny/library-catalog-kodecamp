// Step 1: Create a Book constructor function
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

// Step 2: Create a LibraryCatalog constructor function
function LibraryCatalog() {
  this.books = [];
}

// Step 3a: Add a method to add a book to the catalog
LibraryCatalog.prototype.addBook = function (book) {
  this.books.push(book);
};

// Step 3b: Add a generator function to iterate over the books in the catalog
LibraryCatalog.prototype.bookIterator = function* () {
  for (const book of this.books) {
    yield book;
  }
};

// Step 3c: Add Symbol.iterator method to return the same generator function for iteration
LibraryCatalog.prototype[Symbol.iterator] = function () {
  return this.bookIterator();
};

// Step 3d: Add a method to get books by author
LibraryCatalog.prototype.getBooksByAuthor = function (authorName) {
  return this.books.filter(book => book.author === authorName);
};

// Usage example:
const catalog = new LibraryCatalog();

catalog.addBook(new Book("Book 1", "Author 1", "Genre 1"));
catalog.addBook(new Book("Book 2", "Author 2", "Genre 2"));
catalog.addBook(new Book("Book 3", "Author 1", "Genre 3"));

// Iterate over the books using for...of loop
for (const book of catalog) {
  console.log(book.title);
}

// Get books by a specific author
const authorBooks = catalog.getBooksByAuthor("Author 1");
console.log("Books by Author 1:", authorBooks);
