import React from 'react';
import './App.scss';
import QuoteBox from './components/QuoteBox';

class App extends React.Component {
  state = {
    color: '#FFCBA4',
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <QuoteBox handleColor={(color) => this.setState({ color })} />
      </div>
    );
  }
}
export default App;
