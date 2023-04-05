import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
// import TourDetails from "./Components/TourDetails/TourDetails";
// const db = require("./data/db.json");
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    
    {/* <Routes>
      <Route path="/"  element={<Home data={db}/>}></Route>
      
      <Route path="/city/:id"  element={<TourDetails/>}></Route>
      </Routes> */}
      
    </>
  ); 
}


export default App;
