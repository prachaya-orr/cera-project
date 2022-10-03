import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import * as authService from '../api/authApi';
import { addAccessToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (input) => {
    const res = await authService.register(input); 
    setUser(true)
    addAccessToken(res.data.token)
  };

  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
 