import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ThemesCss.css'
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/KeralaImages/img2.jpg'
import img2 from './DomesticTourPackagesImages/HimachalImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/AndamanImages/img2.jpg'
import img4 from './InternationalTourPackagesImages/DubaiImages/img1.jpg'
import img5 from './InternationalTourPackagesImages/MalaysiaImages/img1.jpg'
import img6 from './InternationalTourPackagesImages/EuropeImages/img1.jpg'
const FamilyTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundthemes">
   <div className="header"><h1>Family Tour<span>Packages</span></h1></div>
   <div class="container" >
   <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1} />
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
          <li>Includes All</li>
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
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Andaman Family Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Port Blair | <span>2N</span> Havelock | <span>1N</span> Niel Island</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Half Day Adventure</li>
           <li>Light And Sound Show</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>25,235</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Andaman Family Package',25235)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4}/>
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Family Fun At Dubai Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Dubai</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>93,896</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Family Fun At Dubai Package',93896)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Family Fun At Malaysia Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kuala Lumpur | <span>1N</span> Penang | <span>1N</span> Langkawi</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>66,496</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Family Fun At Malaysia Package',66496)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6}/>
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Family Fun At Europe Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Paris | <span>2N</span> Engelberg | <span>1N</span> Zurich</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>1,80,910</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Family Fun At Europe Package',180910)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
        </>
    )

}
export default FamilyTourPackages