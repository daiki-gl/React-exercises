import { createSlice } from '@reduxjs/toolkit'

export const MOODS = {
  SAD: 'sad',
  HAPPY: 'happy',
  SHOCKED: 'shocked',
  BLISSFUL: 'blissful',
  EXCITED: 'excited',
  KO: 'ko',
  LOVESTRUCK: 'lovestruck',
}

export const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    mood: MOODS.SAD,
    size: 320,
    color: '#fff',
  },
  reducers: {
    updateCatMood: (state, action) => ({ ...state, mood: action.payload }),
    increaseSize: (state) => ({ ...state, size: state.size + 10 }),
    decreaseSize: (state) => ({ ...state, size: state.size - 10 }),
    changeColor: (state, action) => ({ ...state, color: action.payload }),
  },
})

export const { updateCatMood, increaseSize, decreaseSize, changeColor } =
  moodSlice.actions

export default moodSlice.reducer
