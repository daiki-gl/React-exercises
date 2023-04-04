import Field from './components/Field'
import Button from './components/Button'
import { useReducer } from 'react'

import {
  CLEAR_FORM_VALUE,
  initialState,
  reducer,
  SET_FORM_VALUE,
  VALIDATION,
} from './components/reducer'

/**
 *
 *
 * Create a form with common features like validation and hint messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a hint message for validation errors
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 * - Manage the state of the form using React Hooks (useState, useEffect, useReducer)
 *
 */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    const name = e.target.name.toLowerCase()
    dispatch({
      type: SET_FORM_VALUE,
      payload: { ...state, [name]: e.target.value },
    })
  }

  const handleSubmit = () => {
    dispatch({ type: VALIDATION })
  }

  const handleClear = () => {
    dispatch({ type: CLEAR_FORM_VALUE })
  }

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field
          errorMsg={state.errorMsg.email}
          label="Email"
          value={state.email}
          onChange={handleChange}
        />
        <Field
          errorMsg={state.errorMsg.password}
          label="Password"
          value={state.password}
          onChange={handleChange}
        />

        <div className="Buttons">
          <Button label="Clear" onClick={handleClear} />
          <div className="Spacer" />
          <Button
            isFilled={state.isFilled}
            label="Login"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
