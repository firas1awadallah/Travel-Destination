
import Header from '../Header/Header';
import '../Header/Header.css' ;
import Tours from "../Tours/Tours";
import '../Tours/Tours.css' ;
import Footer from "../Footer/Footer";
import '../Footer/Footer.css' ;

 
  function Home(props) {
   const data = props.data
     return (
        <>
        <Header/>       
        {
             data.map(element=>{
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
