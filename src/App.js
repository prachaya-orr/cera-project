import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loading } = useLoading();
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;
  return (
    <div>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose="2500"
        pauseOnHover
      />
    </div>
  );
}

export default App;
