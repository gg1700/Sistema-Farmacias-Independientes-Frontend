import { BrowserRouter } from 'react-router-dom';
import RouterPage from './routes/Index.routes';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <RouterPage />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;