import React from 'react'
import { Cat } from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateCatMood,
  MOODS,
  increaseSize,
  decreaseSize,
  changeColor,
} from './redux/moodSlice'

function App() {
  const currentMood = useSelector((state) => state.mood)
  const currentSize = useSelector((state) => state.size)
  const currentColor = useSelector((state) => state.color)
  const dispatch = useDispatch()

  const handleMoodUpdate = (event) => {
    const mood = event.target.dataset.type
    dispatch(updateCatMood(mood))
  }

  const handleColorChange = (event) => {
    const color = event.target.value
    dispatch(changeColor(color))
  }

  return (
    <div className="App">
      <Cat size={currentSize} mood={currentMood} color={currentColor} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={handleMoodUpdate}>
            {mood}
          </button>
        ))}
      </section>
      <div style={{ marginTop: '50px' }}>
        <button onClick={() => dispatch(increaseSize())}>+</button>
        <button onClick={() => dispatch(decreaseSize())}>-</button>
      </div>

      <div>
        <input type="color" onChange={handleColorChange} />
      </div>
    </div>
  )
}

export default App
