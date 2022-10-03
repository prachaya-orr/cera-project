import { useState } from 'react';
import { createContext } from 'react';

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
  return <LoadingContext.Provider>{children}</LoadingContext.Provider>;
}

export default LoadingContextProvider;
