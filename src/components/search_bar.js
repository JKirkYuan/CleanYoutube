import React, { Component } from 'react'; // { Component } pull off the variable called component
import ReactDOM from 'react-dom';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = { term: '' }; // create new object and assign to this.state
  }

  onInputChange(term) {
    this.setState({term});
  }

  boop(){
    this.props.onSearchTermChange(this.state.term);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.boop();
    }
  }

  render() {
    return ( //everytime update, think about state
      <div className="search-bar input-group">
        <input className="form-control" 
        value={this.state.term} //controlled component
        onChange={ event => this.onInputChange(event.target.value) }
        onKeyPress={this.handleKeyPress}
        />
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" onClick={() => this.boop()}>Search</button>
        </div>      
      </div>
    );
  }

}

export default SearchBar;
