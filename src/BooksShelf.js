import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksShelf extends React.Component {
  render() {
    const { books, status, title, updateShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === status).map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={updateShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BooksShelf.propTypes = {
  book: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default BooksShelf
