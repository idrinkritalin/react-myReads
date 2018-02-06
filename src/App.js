import React from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  shelves = [
    {
      title: 'Currently Reading',
      status: 'currentlyReading'
    },
    {
      title: 'Want To Read',
      status: 'wantToRead'
    },
    {
      title: 'Read',
      status: 'read'
    }
  ]

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({books:books}))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListShelves
            books={this.state.books}
            shelves={this.shelves}
            title={this.shelves.title}
            status={this.shelves.status}
            updateShelf={this.updateShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
            <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
