import { AuthContextProvider } from './contexts/AuthContext';
import AppRouter from './routes';

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
