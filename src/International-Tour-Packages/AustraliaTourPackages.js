import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InterCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './InternationalTourPackagesImages/AustrailaImages/img4.jpg'
import img2 from './InternationalTourPackagesImages/AustrailaImages/img2.jpg'
import img3 from './InternationalTourPackagesImages/AustrailaImages/img3.jpg'
const KeralaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundinter">
   <div className="header"><h1>Australia Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Superdeal Australia Package - 6N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Sydney | <span>3N</span> Melbourne</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Bus Hop-On Hop-Off</li>
           <li>City Experience</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>1,85,275</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Superdeal Australia Package - 6N',185275)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">9N/10D</span>
      <Card.Body>
        <Card.Title className='title'>Australian Dreams Group Tour - 9N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Melbourne | <span>2N</span> Gold Cost | <span>3N</span> Sydney</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Indian Tour Manager</li>
           <li>Indian Dinner</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>3,05,005</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Australian Dreams Group Tour - 9N',305005)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">11N/12D</span>
      <Card.Body>
        <Card.Title className='title'>The Big Australian Holiday - 11N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Melbourne | <span>3N</span> Gold Cost | <span>3N</span> Sydney | <span>2N</span> Cairns</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Indian Tour Manager</li>
           <li>Indian Dinner</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>3,52,852</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('The Big Australian Holiday - 11N',352852)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
        </>
    )

}
export default KeralaTourPackages