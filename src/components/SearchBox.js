import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import search from './search.svg';

class SearchBox extends Component {
    render(){

        return <div className='search-box'>
        <div className='search-group'>
          <span className='input-group-btn'>
            <div className='btn-search'>
              <img src={search}/>
            </div>
          </span>
          <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
      </div>;
    }
}

export default SearchBox;