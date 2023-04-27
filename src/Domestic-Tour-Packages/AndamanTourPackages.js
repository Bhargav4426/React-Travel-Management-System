import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './DomCardsCss.css';
import img1 from './DomesticTourPackagesImages/AndamanImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/AndamanImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/AndamanImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/AndamanImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/AndamanImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/AndamanImages/img6.jpg'
const AndamanTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Andaman Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Explore The Beautiful Andaman</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Port Blair | <span>2N</span> Havelock | <span>2N</span> Niel Island</b>
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
            <b><span className="spanrupee">&#8377;</span>27647</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Explore The Beautiful Andaman',27647)}>BOOK NOW</Button>

      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Andaman-Soulmate Special</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Port Blair | <span>1N</span> Havelock | <span>1N</span> Niel Island</b>
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
            <b><span className="spanrupee">&#8377;</span>14,425</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className="buttoncard" onClick={()=>Tour_Register('Andaman-Soulmate Special',14425)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
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
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Best Of Andaman Hotel&Car</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Port Blair | <span>1N</span> Havelock | <span>1N</span> Niel Island</b>
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
            <b><span className="spanrupee">&#8377;</span>20,050</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Best Of Andaman Hotel&Car',20050)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Nicobari Tales - Romantic Trip</Card.Title>
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
            <b><span className="spanrupee">&#8377;</span>26,536</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Nicobari Tales - Romantic Trip',26536)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Andaman For Nature Lovers Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Port Blair | <span>2N</span> Havelock | <span>2N</span> Niel Island</b>
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
            <b><span className="spanrupee">&#8377;</span>30,133</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Andaman For Nature Lovers Package',30133)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default AndamanTourPackages