import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';

function App() {
  const { loading } = useLoading();

  return (
    <div>
      {/* {!loading && <Spinner />} */}
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
