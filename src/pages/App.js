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
import PatchItinerary from './PatchItinerary';
import { useGetUserLoginTokenMutation } from '../features/usersAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from '../features/userSlice';

function App() {

    const [loginToken] = useGetUserLoginTokenMutation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const role = user?.role
    const logged = useSelector(state => state.auth.logged)

    async function verifyToken(){
      try{
          let res = await loginToken(localStorage.getItem('token'))
          if(res?.data.success){
              dispatch(setCredentials(res.data.response.user))
        } else {
            localStorage.removeItem('token')
        }
      } catch(error) {
          localStorage.removeItem('token')
          console.log(error)
      }
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
          verifyToken()
        }
    },[])
  
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <CitiesLayout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/auth/signup' element={logged ? <UnderConstruction /> : <SignUp />} />
                        <Route path='/auth/signin' element={logged ? <UnderConstruction /> : <SignIn />} />
                        <Route path='/cities' element={<Cities />} />
                        <Route path='/cities/:id' element={<Details />} />
                        <Route path='/newcity' element={role === "admin" ? <NewCity /> : <Home />} />
                        <Route path='/editcity' element={role === "admin" ? <EditCity /> : <Home />} />
                        <Route path='/newitinerary' element={logged ? <NewItinerary /> : <Home />} />
                        <Route path='/mytinerary/:id' element={logged ? <MyTineraries /> : <Home />} />
                        <Route path='/newactivity' element={logged ? <NewActivity /> : <Home />} />
                        <Route path='/patchitinerary/:id' element={logged ? <PatchItinerary /> : <Home />} />
                        <Route path='*' element={<UnderConstruction />} />
                    </Routes>
                </CitiesLayout>
            </BrowserRouter>
        </>
    );
}

export default App;
