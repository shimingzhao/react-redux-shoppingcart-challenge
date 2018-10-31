import React from 'react'
import ReactDOM from 'react-dom'

const RoomContext = React.createContext()

class RoomStore extends React.Component {
  state = {
    isLit: false
  }

  toggleLight = () => {
    this.setState(state => ({isLit: !state.isLit}))
  }

  render () {
    // Pass down the state and the onToggleLight action
    return (
      <RoomContext.Provider
        value={{
          isLit: this.state.isLit,
          onToggleLight: this.toggleLight
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const Room = () => (
  <RoomContext.Consumer>
    {({isLit, onToggleLight}) => (
      <div className={`room ${isLit ? 'lit' : 'dark'}`}>
        The room is {isLit ? 'lit' : 'dark'}.
        <br/>
        <br/>
        <button onClick={onToggleLight}>Flip</button>
      </div>
    )}
  </RoomContext.Consumer>
)

const App = () => (
  <RoomStore>
    {/*<div className="app">*/}
      <Room/>
    {/*</div>*/}
  </RoomStore>
)

export default App

