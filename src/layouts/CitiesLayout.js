import Footer from '../components/Footer';
// import Header from '../components/Header';

function CitiesLayout(props) {
    return (
        <>
            {/* <Header /> */}
            {props.children}
            <Footer />
        </>
    );
}

export default CitiesLayout;
