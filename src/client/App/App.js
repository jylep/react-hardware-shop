import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import Header from '../Components/Header/Header';
import News from '../Components/News/News';
import ProductList from '../Components/ProductList/ProductList';
import Search from '../Components/Search/Search';
import _ from 'lodash';

import "./app.css";

class App extends Component {

  state = {
    products: [],
    isLoaded: false,
    searchResults: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(products => {
        this.setState((prevState) => {
          return { ...prevState, isLoaded: true, products: _.uniqBy([...prevState.products, ...products], "id") }
        });
      })
      .catch(err => console.error("An error occured while fetching products", err));
  }

  handleSearch = searchValue => {

    // TODO: Look into the express app and configure the queryparams for json-server full-text-search
    fetch(`http://localhost:8080/api/products?q=${searchValue}`)
      .then(res => res.json())
      .then(searchResults => {
        this.setState((prevState) => {
          return { ...prevState, searchResults: _.uniqBy(searchResults, "id") }
        });
      })
      .catch(err => console.error("An error occured while searching for " + searchValue, err));
  }

  render() {
    const { products, searchResults } = this.state;

    return (
      <Container className="app">
        <Header />
        <Router>
          <Switch>
            <Route path="/cart">cart</Route>
            <Route path="/">
              <Segment>
                <News />
                <Search onSearch={this.handleSearch} results={searchResults} />
                <ProductList products={products ? products : []} />
              </Segment>
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;