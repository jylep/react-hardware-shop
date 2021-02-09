import React, { Component, Fragment } from 'react';
import { Container, Header as SemanticUiHeader, Label, Menu } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' };

  // Get the number of items in cart after componentDidMount(), use localStorage

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container className="header">
        <SemanticUiHeader as ="h1" icon="cog" content="Hardvare Shop" />
        <Menu secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleMenuClick}/>
          <Menu.Item name="cart" position="right" active={activeItem === 'cart'} onClick={this.handleMenuClick}>
            Cart
            <Label color='teal'>#articles</Label>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}