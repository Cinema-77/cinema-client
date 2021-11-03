import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
