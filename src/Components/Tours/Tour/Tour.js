import '../Tour/Tour.css' ;

function Tour(props) {
  function modeHandler(){
  }
    return (
        <div id="tourdev" onClick={modeHandler}>
        <h3 id="tourh3" key={props.id}>{props.id}</h3>
        <h2 id='tourh2'>{props.name}</h2>
        <img id='tourimg' src={props.image} alt={props.name} />
        </div>
    )
  }
  
 export default Tour;