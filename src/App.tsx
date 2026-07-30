import { BrowserRouter } from 'react-router-dom';
import RouterPage from './routes/Index.routes';

function App() {
  return (
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
}

export default App;