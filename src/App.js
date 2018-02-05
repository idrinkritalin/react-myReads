import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
  }

  render() {
    console.log(this.state.books)

    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookShelf
              books={this.state.books}
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
