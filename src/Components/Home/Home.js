
// import Header from '../Header/Header';

import Tours from "../Tours/Tours";

import Footer from "../Footer/Footer";

import '../Home/Home.css';
 
  function Home(props) {
    const data = props.data;
     return (
        <>
        {/* <Header/>   */}
        <Tours data={data}/>     
        <Footer/>
        </>
       );    
    
 }

  export default Home;