
import Home from "./Components/Home/Home";
import './Components/Home/Home.css';
const db = require("./data/db.json");
function App() {
  return (
    <>
     <Home data={db}/>
    </>
  ); 
}

export default App;
