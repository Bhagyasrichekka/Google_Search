// Write your code here
import './index.css'

const SuggestionItems = props => {
  const {item, changeInput} = props

  const {suggestion} = item

  const callChangeInput = () => {
    changeInput(suggestion)
  }
  return (
    <li className="item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={callChangeInput}
      />
    </li>
  )
}
export default SuggestionItems
