import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
    const {books} = this.state
    const {status, title} = this.shelves
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListShelves
              books={books}
              shelves={this.shelves}
              title={title}
              status={status}
              updateShelf={this.updateShelf}
            />
          )}/>

          <Route exact path="/search" render={() => (
              <SearchBooks
                books={books}
                updateShelf={this.updateShelf}
              />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
