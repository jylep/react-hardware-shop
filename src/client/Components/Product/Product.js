import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class Product extends Component {

  render() {
    const { product } = this.props;

    return (
      <Card>
        <Card.Content>
          <Image src={product.image} />
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.price} NOK</Card.Meta>
          <Card.Description>
            {product.description}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}