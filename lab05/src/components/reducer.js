export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const SET_IS_FILLED = 'SET_IS_FILLED'
export const VALIDATION = 'VALIDATION'
export const CLEAR_FORM_VALUE = 'CLEAR_FORM_VALUE'

export const initialState = {
  email: '',
  password: '',
  isFilled: false,
  errorMsg: {
    email: '',
    password: '',
  },
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FORM_VALUE:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isFilled: fillCheck(action.payload),
      }

    case VALIDATION:
      return {
        ...state,
        errorMsg: validate(state.email, state.password, state.errorMsg),
      }

    case CLEAR_FORM_VALUE:
      if (window.confirm('Do you want to clear all input data?')) {
        return {
          ...state,
          email: '',
          password: '',
          isFilled: false,
        }
      }
      break

    default:
      return state
  }
}

function fillCheck(value) {
  value.email !== '' && value.password !== ''
    ? (value.isFilled = true)
    : (value.isFilled = false)
  return value.isFilled
}

function validate(email, password, errorMsg) {
  const regexMail =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  if (!regexMail.test(email)) {
    errorMsg.email = 'invalid email address'
  } else {
    errorMsg.email = ''
  }

  if (!password.match(/[a-z]/g)) {
    errorMsg.password = 'Enter lowercase letter'
  } else if (!password.match(/[A-Z]/g)) {
    errorMsg.password = 'Enter uppercase letter'
  } else if (!password.match(/[0-9]/g)) {
    errorMsg.password = 'Enter number'
  } else if (!password.match(/[!@#$%^&*~"'()|=:;/\\[-\]{\}]/g)) {
    errorMsg.password = 'Enter special character'
  } else if (password.length > 16 || password.length < 4) {
    errorMsg.password = 'Enter password within 16 and over 4 letters'
  } else {
    errorMsg.password = ''
  }

  Object.values(errorMsg)[0] === '' &&
    Object.values(errorMsg)[1] === '' &&
    console.log("'Successfully logged in'")

  return errorMsg
}
