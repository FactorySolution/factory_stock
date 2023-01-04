import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
    state = {
      name: 'Word!!!!'
    }
    
    render() {
      return <div>
        <p>name: { this.state.name }</p>
        <button onClick={() => {
          this.setState({ name: 'Oliveira' })
        }}>Click me</button>
      </div>
    }
  }
export default ClassComponent;