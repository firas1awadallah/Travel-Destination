
import '../Tours/Tours.css' ;
import Tour from "./Tour/Tour";
import {Link} from 'react-router-dom';
function Tours(props) {
  
  return (
    <>
      {
      props.data.map(tour=>{
        return (
          <div id='toursdiv' key={tour.id}>
            <Link to={`/city/${tour.id}`}>
            <Tour  name = {tour.name} image = {tour.image}/>
            </Link>
            </div>
      )
        })
      }
    </>
  )
}

export default Tours;