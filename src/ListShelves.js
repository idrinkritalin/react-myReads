import React from 'react'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class ListShelves extends React.Component {
  render() {
    const { shelves, books, updateShelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>📚 MyReads</h1>
        </div>
        <div className="list-books-content">
        {shelves.map(shelve => (
          <div key={shelve.status}>
            <BooksShelf
              title={shelve.title}
              status={shelve.status}
              books={books}
              updateShelf={updateShelf}
            />
          </div>
        ))}
        </div>
        <div className="open-search">
          <Link
            to="/search"
            >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListShelves
