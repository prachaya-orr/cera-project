import { toast } from 'react-toastify';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import * as authService from '../api/authApi';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (input) => {
    try {
      const res = await authService.register(input);
      toast.success('success register');
    } catch (err) {
      toast.error(err.response.data.message);
    }
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
