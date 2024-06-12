import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

  import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components';

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
