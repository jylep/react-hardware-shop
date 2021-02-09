import React, { Component } from 'react';
import { Search as SemanticSearch } from 'semantic-ui-react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      loading: false,
    };
  }

  onChange = (e) => {
    const searchInput = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, searchInput }));
    this.props.onSearch(searchInput);
  }

  render() {
    return (
      <SemanticSearch />
    );
  }
}