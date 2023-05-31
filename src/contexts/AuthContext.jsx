import { createContext, useReducer } from 'react';

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'signup': {
      return {
        ...state,
        fetching: false,
        isAuth: true,
        account: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        fetching: false,
        isAuth: true,
        account: action.payload,
      };
    }
    case 'logout': {
      localStorage.removeItem('access_token');
      return {
        ...state,
        fetching: false,
        isAuth: false,
        account: null,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  fetching: true,
  isAuth: false,
  account: null,
};
