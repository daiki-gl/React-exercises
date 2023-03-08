import React from 'react'
import ReactDOM from 'react-dom'
import Snsbox from './components/Snsbox'

// class App extends React.Component {
//   render() {
//     return <>
//     </>
//   }
// }

const App = () => {
  return (
    <>
      <Snsbox />
    </>
  )
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
