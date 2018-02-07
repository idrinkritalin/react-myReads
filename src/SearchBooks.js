import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    requestedBooks: []
  }

  query: ''

  searchBook = event => {
    this.query = event.target.value
    let booksInShelf = this.props.books

    if (this.query) {
      BooksAPI.search(this.query).then(response => {
          this.setState({
            requestedBooks: response.map(result => {
              let bookOwned = booksInShelf.find(b => b.id === result.id)
              return bookOwned || result
            })
          })
      })
    } else {
      this.setState({
        requestedBooks: []
      })
    }
  }

  render() {
    const { requestedBooks } = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
            {this.query !== '' && (
              <ol className="books-grid">
                {requestedBooks.map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateShelf={this.props.updateShelf}
                    />
                  </li>
                ))}
              </ol>
            )}
            {this.query !== '' && requestedBooks.length !== 0 && (
              <ol className="books-grid">
                <i>{requestedBooks.length} 📚&nbsp; found!</i>
              </ol>
            )}
        </div>
      </div>
    )
  }
}

export default SearchBooks
