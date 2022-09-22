import '../styles/App.css';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cities from './Cities';
import NewCity from './NewCity';
import UnderConstruction from './UnderConstruction';
import ScrollToTop from '../components/ScrollToTop';
import CitiesLayout from '../layouts/CitiesLayout';
import Details from './Details';
import EditCity from './EditCity';
import MyTineraries from './MyTineraries';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NewItinerary from './NewItinerary';
import NewActivity from './NewActivity';

function App() {
  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <CitiesLayout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth/signup' element={<SignUp />} />
              <Route path='/auth/signin' element={<SignIn />} />
              <Route path='/cities' element={<Cities />} />
              <Route path='/cities/:id' element={<Details />} />
              <Route path='/newcity' element={<NewCity />} />
              <Route path='/editcity' element={<EditCity />} />
              <Route path='/newitinerary' element={<NewItinerary />} />
              <Route path='/mytinerary/:id' element={<MyTineraries />} />
              <Route path='/newactivity' element={<NewActivity />} />
              <Route path='*' element={<UnderConstruction />} />
            </Routes>
          </CitiesLayout>
        </BrowserRouter>
    </>
  );
}

export default App;
