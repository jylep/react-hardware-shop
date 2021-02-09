import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import Product from '../Product/Product';

export default class ProductList extends Component {

  render() {
    const {products} = this.props;

    return(
      <Card.Group>
        {products.map(product => (
          <Product product={product} />
        ))}
      </Card.Group>
    );
  }
}