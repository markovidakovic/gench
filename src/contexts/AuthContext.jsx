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
    }
    case 'login': {
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
