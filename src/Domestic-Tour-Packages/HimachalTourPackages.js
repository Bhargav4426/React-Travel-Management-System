import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/HimachalImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/HimachalImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/HimachalImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/HimachalImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/HimachalImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/HimachalImages/img6.jpg'
const HimachalTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Himachal Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Exotic Manali & Shimla Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Manali | <span>2N</span> Shimla</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>19,422</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Exotic Manali & Shimla Package',19422)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">9N/10D</span>
      <Card.Body>
        <Card.Title className='title'>Incredible Himachal Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Shimla | <span>3N</span> Manali | <span>3N</span> Dharmashala</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>31,931</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Incredible Himachal Package',31931)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">8N/9D</span>
      <Card.Body>
        <Card.Title className='title'>Shimla & Manali Family Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Shimla | <span>4N</span> Manali</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
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
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Shimla & Manali Family Package',28235)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Holiday In Manali With Chandigarh</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Manali | <span>1N</span> Chandigarh</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>17,524</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Holiday In Manali With Chandigarh',17524)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Himachal Vacation</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Shimla | <span>3N</span> Manali | <span>2N</span> Dharmashala</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>26,560</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Himachal Vacation',26560)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Premium Fun Manali Honeymoon!</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Manali</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>54,283</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium Fun Manali Honeymoon!',54283)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default HimachalTourPackages