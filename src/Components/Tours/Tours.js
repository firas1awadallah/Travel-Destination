import '../Tours/Tours.css' ;
import Tour from "./Tour/Tour";

function Tours(props) {
  const data = props.data;
  return (
    <>
      {data.map((tour, index) => (
        <Tour key={index} id={tour.id} name={tour.name} image={tour.image} />
      ))}
    </>
  );
}

  
  export default Tours;