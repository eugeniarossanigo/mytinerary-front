import '../styles/App.css';
import Home from '../pages/Home';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Cities from './Cities';
import NewCity from './NewCity';
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <>
    <BrowserRouter>
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
