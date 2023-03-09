import React, { Component } from 'react';
import lookLeft from '../assets/look-left.jpeg'
import lookRight from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    img: lookLeft
  }
  //click left/right button handler goes here
  handleClickLeft = () => {
    this.setState({img: lookLeft})
}

  handleClickRight = () => {
    this.setState({img: lookRight})
}


  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.img}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.handleClickLeft}>⭠</button>
        <button className="btn" onClick={this.handleClickRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;