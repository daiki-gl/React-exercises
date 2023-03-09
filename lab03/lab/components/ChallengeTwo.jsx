import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({arr: studentList})
    }, 3000);
  }

  //random button handler
  randomize = (array) => {
    let currentIndex = array.length,  randomIndex;
    const newArr = [...array]
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
    }
    this.setState({arr: newArr})
  }

  
  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((student, index) => {
              return <li key={index}>{student}</li>
            })}
          </ul>
        </div>
        <button className='btn large' onClick={() => this.randomize(studentList)}>Randomize</button>
      </>
    )
  }
}
