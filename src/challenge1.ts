type Book = {
  title: string;
  author: string;
  year: number;
};

let books: Book[] = [];

const addBook = (title: string, author: string, year: number): void => {
  const newBook: Book = { title, author, year };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${year})`);
};

const listBooks = (): void => {
  console.log("All Books:");
  books.forEach((item) => {
    console.log(`- ${item.title} by ${item.author} (${item.year})`);
  });
};

const searchBook = (title?: string): void => {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }
  const searchresult = books.filter((book) => book.title.includes(title));
  if (searchresult.length > 0) {
    console.log(`Search Results for "${title}":`);
    searchresult.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  } else {
    console.log(`No books found with title containing "${title}".`);
  }
};

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
