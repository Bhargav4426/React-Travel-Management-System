import {useLocation } from "react-router-dom"
import React,{useRef} from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import logo4 from './images/logo.png'
import { useState } from "react";
import greentick from './images/greentick.png'
import './RegistrationSuccess.css';
const RegistrationSuccess=()=>{
const location=useLocation();
const postData = location.state?.postData || {};
const [currentDate] = useState(new Date());
const invoiceId=((postData.customerId)-34588);
    const cardRef = useRef(null);
  
    const downloadPDF = () => {
        const input = cardRef.current;
        const dpi = 600; 
        html2canvas(input,  { scale: dpi / 96 }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("invoice.pdf");
        });
      }
return(
    <>
    <div class="registersuccessdiv">
      <div class="thank-you-pop">
          <img src={greentick} alt=""/>
		  <h1 style={{color:"white"}}>Thank You!</h1>
		  <p style={{color:"white"}}>Your submission is received and we will contact you soon</p>

    <div class="row" id="containerdivv" >
        <div class="col-12">
            <div class="card" >
                <div class="card-body p-0" ref={cardRef}>
                    <div class="row p-1" id="rowid">
                        <div class="col-md-6" id="imgstyle">
                            <img src={logo4} style={{width:"30%",margin:"5%"}} alt="Not Found" />
                        </div>
                          
                        <div class="col-md-6 " id="dateid">
                            <p class="font-weight-bold mb-1" id="invoiceid">Invoice #TTS{invoiceId}</p>
                            <p class="font-weight-lighter" id="innerdateid">Date: {currentDate.toLocaleDateString()}</p>
                        </div>
                        <div className="text-center">
                        <p class="font-weight-bold mb-15" id="pheading">Travel Invoice</p>
                        </div>
                    </div>

                    <hr class="my-5"/>


                    <div class="row p-1" >
                        <div class="col-md-12">
                            <table class="table" id="tableid">
                                <thead>
                                    <tr>
                                        <th class="border-0 text-uppercase small font-weight-bold">Tour ID</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#1</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#2</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#3</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Email</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Mobile No</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">City</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Package Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Package Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{postData.customerId}</td>
                                        <td>{postData.guestOneName}</td>
                                        <td>{postData.guestTwoName}</td>
                                        <td>{postData.guestThreeName}</td>
                                        <td>{postData.email}</td>
                                        <td>{postData.mobile}</td>
                                        <td>{postData.city}</td>
                                        <td>{postData.packagename}</td>
                                        <td>Rs.{postData.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="d-flex flex-row-reverse bg-dark text-white p-2" id="footerid">
                        <div class="py-3 px-4 text-right" >
                            <div class="mb-2">Grand Total</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{postData.invoice_bill}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-2">=</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">Discount</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{postData.discount}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-">-</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">GST</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{postData.gst_amt}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-2">+</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">Sub-Total amount</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{postData.total}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</div>
 <div className="text-center"><button class="btn btn-primary btn-login text-uppercase fw-bold" onClick={downloadPDF} type="submit" style={{marginBottom:"2%"}}>Dowload Invoice</button></div>
      
	  </div>
      
    
    </>
)
}
export default RegistrationSuccess