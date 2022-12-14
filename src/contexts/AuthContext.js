import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import * as authService from '../api/authApi';
import * as userService from '../api/userApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken) {
          await getMe();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    await getMe();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logout = async () => {
    setUser(null);
    removeAccessToken();
  };

  const updateUesr = async (input) => {
    const res = await userService.updateUser(input);
    setUser(res.data.user)
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        initialLoading,
        isOpen,
        openModal,
        closeModal,
        updateUesr
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
