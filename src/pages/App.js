import '../styles/App.css';
import Home from '../pages/Home';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Cities from './Cities';
import NewCity from './NewCity';
import UnderConstruction from './UnderConstruction';
import ScrollToTop from '../components/ScrollToTop';
import CitiesLayout from '../layouts/CitiesLayout';
import Details from './Details';
import Carrousel from '../components/Carrousel';

function App() {
    return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <CitiesLayout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cities' element={<Cities />} />
              <Route path='/cities/:id' element={<Details />} />
              <Route path='/cities/:id' element={<Carrousel />} />
              <Route path='/newcity' element={<NewCity />} />
              <Route path='*' element={<UnderConstruction />} />
            </Routes>
          </CitiesLayout>
        </BrowserRouter>
    </>
    );
}

export default App;
