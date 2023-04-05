import '../Header/Header.css' ;
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import TourDetails from "../TourDetails/TourDetails";
const db = require("/home/firas/Travel-Destination/src/data/db.json");
function Header (){
return (
    <>
   

<hr></hr>
<Routes>
      <Route path="/"  element={<Home data={db}/>}></Route>
      
      <Route path="/city/:id"  element={<TourDetails/>}></Route>
      </Routes>
    </>
)
}
export default Header;