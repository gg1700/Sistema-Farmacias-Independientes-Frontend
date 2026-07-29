import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Help from './pages/helpPage'
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="help" element={<Help/>}></Route>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;