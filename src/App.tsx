import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import '@/assets/styles/app.css';
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
