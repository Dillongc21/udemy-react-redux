import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    constructor(props) {
      super(props);

      this.state = { term : '' }
    }

    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
