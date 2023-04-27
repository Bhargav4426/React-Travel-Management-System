import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/KarnatakaImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/KarnatakaImages/img2.JPG'
import img3 from './DomesticTourPackagesImages/KarnatakaImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/KarnatakaImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/KarnatakaImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/KarnatakaImages/img6.jpg'
const KarnatakaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Karnataka Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Awesome Coorg & Ooty Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Ooty | <span>2N</span> Coorg</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Bandipur National Park</li>
           <li>Abbey Falls</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>14,785</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Awesome Coorg & Ooty Package',14785)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Incredible South Vacay Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Ooty | <span>2N</span> Coorg | <span>1N</span> Mysore</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Dubare Elephant Camp</li>
           <li>Abbey Falls</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>17,535</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Incredible South Vacay Package',17535)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Weekend Escape To Ooty & Mysore</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Mysore | <span>2N</span> Ooty</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>St.Philomena Church</li>
           <li>Chamuundi Hills</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>12,755</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Weekend Escape To Ooty & Mysore',12755)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Coorg Trip With Coffe Plantation</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Coorg</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Coffee Plantation Tour</li>
           <li>Raja Seat</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>10,542</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Coorg Trip With Coffe Plantation',10542)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Karnataka Vacation</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Coorg | <span>2N</span> Mysore | <span>2N</span> Ooty</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Dubare Elephant Camp</li>
           <li>Jhari Waterfall</li>
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
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Karnataka Vacation',31560)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Weekend Gateway To Sakleshpur</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span>Sakleshpur</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Bisle Reserve Forest</li>
           <li>Agni Gudda Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>12,449</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Weekend Gateway To Sakleshpur',12449)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default KarnatakaTourPackages