import { useContext } from 'react';
import { AuthContext, AuthDispatchContext } from '../contexts';

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}
