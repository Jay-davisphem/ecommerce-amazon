import { createContext, useReducer } from "react";
import actions from "./actions";
import reducer from "./reducer";

const AppContext = createContexti(null);

const initialState = {
  data: [],
  loading: false,
  user: null,
  error: null,
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    data: state?.data,
    loading: state?.loading,
    user: state?.user,
    error: state?.error,
    login: () => dispatch({ type: actions.LOGIN }),
    logout: () => dispatch({ type: actions.LOGOUT }),
    get_data: () => dispatch({ type: actions.GET_DATA }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default Provider;
