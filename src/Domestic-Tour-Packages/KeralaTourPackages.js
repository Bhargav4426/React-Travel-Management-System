import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/KeralaImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/KeralaImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/KeralaImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/KeralaImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/KeralaImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/KeralaImages/img6.webp'
const KeralaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Kerala Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Premium 4N Kerala Vacay Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Munnar | <span>1N</span> Thekkady | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Houseboat Hopping Tour</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>33,611</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium 4N Kerala Vacay Package',33611)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Premium 5N Trip To Kerala Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Cochin | <span>2N</span> Munnar | <span>1N</span> Thekkady | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Boating at Periyar Lake</li>
           <li>Houseboat Hopping Tour</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>37,631</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium 5N Trip To Kerala Package',37631)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Munnar & Alleppey Family Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Munnar | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Houseboat Hopping Tour</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>28,235</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Munnar & Alleppey Family Package',28235)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Freebie In- Kerala Paradise!Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Munnar | <span>1N</span> Thekkady | <span>2N</span> Kovalam | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Kanyakumari Excursion</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>42,236</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Freebie In- Kerala Paradise!Package',42236)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Kerala Vacation Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Cochin | <span>2N</span> Munnar | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Houseboat Hopping Tour</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>31,560</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Kerala Vacation Package',31560)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Kerala For Nature Lovers Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Munnar | <span>2N</span> Thekkady | <span>1N</span> Alleppey</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Photoshoot</li>
           <li>Vagamon Excursion</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>34,133</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Kerala For Nature Lovers Package',34133)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default KeralaTourPackages