import '../styles/App.css';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Welcome />
      <main>
        <Carrousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
