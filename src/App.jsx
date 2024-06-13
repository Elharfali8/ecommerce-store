import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

  import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header, Sidebar } from './components';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Header isOpen={isOpen} handleNav={handleNav} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} handleNav={handleNav} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
