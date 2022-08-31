import '../styles/App.css';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';

function Home() {

  return (
    <>
        <Welcome />
        <main>
            <Carrousel range={4} interval={3} slides={3}/>
        </main>
    </>
  );
}

export default Home;
