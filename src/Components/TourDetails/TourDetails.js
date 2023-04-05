import "../TourDetails/TourDetails.css"
import { useParams } from "react-router-dom"
import {useState} from "react"
const data = require("../../data/db");
function TourDetails () {
    let {id} = useParams();
    const [readMore ,setReadMore] = useState(false)
    return (
   <>
   {
    data.map(element => {
   if (element.id === id){
    return(
        <div className="detailsdiv">
            <h2>{element.name}</h2>
            <img src={element.image} alt={element.name}/>
            <p>{element.price}</p>
            <div className="detailsdiv">
                {
                    readMore? <>
                    <p>{element.info}</p>
                    <botton className="botton" onClick={()=>setReadMore(false)}>show less</botton>
                    </>
                    :
                    <>
                    <p>{(element.info).substring(0,200)}</p>
                    <botton className="botton" onClick={()=>setReadMore(true)}>show more</botton>
                    </>
   }
   </div>
   </div>
    )
} 
    })
}
</>
    )
}
export default TourDetails;