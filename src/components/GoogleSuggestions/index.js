// Write your code here
import {Component} from 'react'
import SuggestionItems from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeInput = content => {
    this.setState({searchInput: content})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt=" google logo"
          className="logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              id="input"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>

          <ul className="list-items">
            {searchResults.map(item => (
              <SuggestionItems
                item={item}
                key={item.id}
                changeInput={this.changeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
