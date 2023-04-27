import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/TamilnaduImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/TamilnaduImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/TamilnaduImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/TamilnaduImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/TamilnaduImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/TamilnaduImages/img6.jpg'
const TamilnaduTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Tamilnadu Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Enchanting Temples Of Tamil Nadu</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Madhurai | <span>1N</span> Rameshwaram | <span>1N</span> Kanyakumari</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Meenakshi Temple</li>
           <li>Ramanathaswami Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>14,684</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Enchanting Temples Of Tamil Nadu',14684)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Darshan At The Glorious Temples</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Madhurai | <span>2N</span> Rameshwaram | <span>1N</span> Kanyakumari</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Meenakshi Temple</li>
           <li>Ramanathaswami Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>20,955</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Darshan At The Glorious Temples',20955)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Romantic Ooty & Kodaikanal Vacay</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Ooty | <span>1N</span> Kodaikanal</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Ooty Lake</li>
           <li>Doddabetta Peak</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>15,790</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Romantic Ooty & Kodaikanal Vacay',15790)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Getaway To The Kodaikanal Hills</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kodaikanal</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Pillar Rock</li>
           <li>Photography Session </li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>9,585</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Getaway To The Kodaikanal Hills',9585)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Temple Run In Tamil Nadu</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Madhurai | <span>1N</span> Rameshwaram | <span>1N</span> Kanyakumari</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Meenakshi Temple</li>
           <li>Ramanathaswami Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>13,003</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Temple Run In Tamil Nadu',13003)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Tamil Nadu For Nature Lovers</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Madhurai | <span>2N</span> Rameshwaram | <span>2N</span> Kanyakumari</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Meenakshi Temple</li>
           <li>Ramanathaswami Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>23,065</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Tamil Nadu For Nature Lovers',23065)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default TamilnaduTourPackages