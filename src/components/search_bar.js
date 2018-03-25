import React, { Component } from 'react'; // { Component } pull off the variable called component
import ReactDOM from 'react-dom';
import $ from "jquery";


/*const SearchBar = () => { //function component
  return <input/>;
};*/

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' }; // create new object and assign to this.state
  }

  render() {
    return ( //everytime update, think about state
      <div className="search-bar">
        <input className="form-control" 
        value={this.state.term} //controlled component
        onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
