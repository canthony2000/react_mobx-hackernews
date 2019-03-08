import React, { Component } from 'react';
import Button from './Button';

class SearchStories extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      query: '',
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState(() => ({ query: value }));
  }

  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      // TODO do API fetch stories
      console.log(query);

      this.setState(() => ({ query: '' }));
    }
  
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchStories;