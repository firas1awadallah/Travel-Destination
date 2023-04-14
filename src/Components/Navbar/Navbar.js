import '../Navbar/Navbar.css' ;
import {Link} from 'react-router-dom';

function Navbar () {
    return (
     
        <nav id='navnav'>
            <Link id='navlink' to="/">Home</Link>
        </nav> 
     
    )
}
export default Navbar;