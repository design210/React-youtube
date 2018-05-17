import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
  }
  render(){
    return (
      <div className="flex">
      <div className="bi"><img src="/src/asset/bi.png"/></div>
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <i class="fab fa-youtube"></i>
      </div>
      </div>
      
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;