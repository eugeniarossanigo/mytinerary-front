import '../styles/App.css';
import Home from '../pages/Home';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Cities from './Cities';
import NewCity from './NewCity';
import UnderConstruction from './UnderConstruction';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/newcity' element={<NewCity />} />
        <Route path='*' element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
