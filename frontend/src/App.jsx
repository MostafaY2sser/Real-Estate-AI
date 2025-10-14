
import './App.css'
import useAOS from './hooks/useAOS';
import AppRouter from './routes/AppRouter';

function App() {

  useAOS();

  return <AppRouter />;
}

export default App
