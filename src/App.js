import  {React} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './components/Error';
import Product from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='product/:productId' element={<Product />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
