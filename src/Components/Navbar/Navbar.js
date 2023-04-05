import '../Navbar/Navbar.css' ;
import {Link} from 'react-router-dom';

function Navbar () {
    return (
     <>
     
        <nav >
            <Link className='navbar' to="/">Home</Link>
            <Link className='navbar' to="/city/:id">TourDetails</Link>
        </nav>
        
     </>
    )
}
export default Navbar