
export default function Product(props) {
  return (
    <div className="tests" style={{ float:'left'}}>
      <div className="testcardd">
      <h2 style={{ color:'whitesmoke'}}>{props.name}</h2><br /> 
      {/* <p >{props.price}</p> */}
      <p className="testpric" style={{paddingTop:'50px', fontSize:'1.5rem'}}>{props.description}</p>
    </div>
 </div> 
  );
}
 