
import Header from '../Header/Header';
import '../Header/Header.css' ;
import Tours from "../Tours/Tours";
import '../Tours/Tours.css' ;
import Footer from "../Footer/Footer";
import '../Footer/Footer.css' ;
const db = require("../../data/db.json");

 
  function Home() {
     return (
        <>
        <Header/>       
        {
             db.map(element=>{
             return(
                      <Tours  name={element.name} image={element.image}/>
                   )
             })
        }
        <Footer/>
    
        </>
       );    
    
 }

  export default Home;
