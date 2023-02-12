import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {editable: true, inputValue: ''}

  inputChange = event => {
    const eventValue = event.target.value
    console.log(eventValue)
    this.setState({inputValue: eventValue})
  }

  OnclickButton = () => {
    const {editable} = this.state
    this.setState({editable: !editable})
  }

  render() {
    const {editable, inputValue} = this.state
    console.log(inputValue)
    return (
      <div className="css-bg-container">
        <h1>Editable Text Input</h1>
        <div className="css-input-edit-save-container">
          <div className="css-input-container">
            {editable ? (
              <input
                type="text"
                name="someUniqueName"
                value={inputValue}
                onChange={this.inputChange}
                className="css-input-itself"
              />
            ) : (
              <p className="css-input-itself">{inputValue}</p>
            )}
          </div>
          <div className="css-button-itself">
            <button
              type="button"
              onClick={this.OnclickButton}
              className="css-button-itself"
            >
              {editable ? 'save' : 'edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
