import '../styles/App.css';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';
import CitiesLayout from '../layouts/CitiesLayout'

function App() {
  return (
    <>
      <Welcome />
      <main>
        <Carrousel />
      </main>
      <CitiesLayout />
    </>
  );
}

export default App;
