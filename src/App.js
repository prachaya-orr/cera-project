import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router />
      <ToastContainer
        position="bottom-right"
        theme='colored'
        autoClose="2500"
        pauseOnHover
      />
    </div>
  );
}

export default App;
