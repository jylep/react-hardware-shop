import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import Header from '../Components/Header/Header';

import "./app.css";
import News from '../Components/News/News';
import ProductList from '../Components/ProductList/ProductList';

class App extends Component {

  state = {
    products: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/products", {
      // mode: "no-cors"
    })
      .then(res => res.json())
      .then(products => {
        this.setState((prevState) => {
          return { ...prevState, isLoaded: true, products: [...prevState.products, ...products] }
        });
      })
      .catch(err => console.error("An error occured while fetching products", err))
  }

  render() {
    const { products } = this.state;

    return (
      <Container className="app">
        <Header />
        <Router>
          <Switch>
            <Route path="/cart">cart</Route>
            <Route path="/">
              <Segment>
                <News />
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