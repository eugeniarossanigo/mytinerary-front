import '../styles/App.css';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';
import CitiesLayout from '../layouts/CitiesLayout'

function Home() {

  const citiesArray = [
    {_id: 1, url: "images/nature2.jpg", title: "Bariloche"},
    {_id: 2, url: "images/nature2.jpg", title: "San Martín de los Andes"},
    {_id: 3, url: "images/nature2.jpg", title: "Villa la Angostura"},
    {_id: 4, url: "images/nature2.jpg", title: "El Bolsón"},
    {_id: 5, url: "images/nature2.jpg", title: "Ciudad5"},
    {_id: 6, url: "images/nature2.jpg", title: "Ciudad6"},
    {_id: 7, url: "images/nature2.jpg", title: "Ciudad7"},
    {_id: 8, url: "images/nature2.jpg", title: "Ciudad8"},
    {_id: 9, url: "images/nature2.jpg", title: "Ciudad9"},
    {_id: 10, url: "images/nature2.jpg", title: "Ciudad10"},
    {_id: 11, url: "images/nature2.jpg", title: "Ciudad11"},
    {_id: 12, url: "images/nature2.jpg", title: "Ciudad12"}
]

  return (
    <>
        <CitiesLayout>
            <Welcome />
            <main>
                <Carrousel data={citiesArray} range={4} interval={3}/>
            </main>
        </CitiesLayout>
    </>
  );
}

export default Home;
