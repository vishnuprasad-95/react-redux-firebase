const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.error.message,
      };
    default:
      return state;
  }
};

export default authReducer;
