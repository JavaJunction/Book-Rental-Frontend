function BookList({ books }) {
    return (
      <section>
        <h2>Available Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default BookList;
  