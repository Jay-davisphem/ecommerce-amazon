import actions from "./actions";
const reducer = (state, action) => {
  const {type, payload} = action

  // auth
  switch (type) {
    case actions.LOGIN:
      return {
        ...state,
        loading: true,
      };
      case actions.LOGIN_SUCCESS:
        return {
        ...state, loading: false, user: payload
      }
      case actions.LOGIN_FAIL:
        return {
        ...state, user: null, loading: false, error: payload
      }
      case actions.LOGOUT:
        return {
        ...state, user: null
      }

      // load data
      case actions.GET_DATA:
        return {
        ...state, loading: true
      }
      case actions.GET_DATA_SUCECESS:
        return {
        ...state, data: payload, loading: false
      }
      case actions.GET_DATA_FAIL:
        return {
        ...state, data: null, loading: false
      }
      default:
        return state
  }
};

export default reducer
