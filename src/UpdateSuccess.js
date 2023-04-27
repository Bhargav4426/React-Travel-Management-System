import { useLocation } from "react-router-dom"
import React,{useRef} from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import logo4 from './images/logo.png'
import { useState } from "react";
import greentick from './images/greentick.png'
import './UpdateSuccess.css';
const UpdateSuccess=()=>{
const location=useLocation();
const updateData = location.state?.updateData || {};
const [currentDate] = useState(new Date());
const invoiceId=((updateData.customerId)-34588);
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
		  <p style={{color:"white"}}>Your Updation is Successfull</p>

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
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#1 Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#2 Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Guest#3 Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Email</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Mobile No</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">City</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Package Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Package Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{updateData.customerId}</td>
                                        <td>{updateData.guestOneName}</td>
                                        <td>{updateData.guestTwoName}</td>
                                        <td>{updateData.guestThreeName}</td>
                                        <td>{updateData.email}</td>
                                        <td>{updateData.mobile}</td>
                                        <td>{updateData.city}</td>
                                        <td>{updateData.packagename}</td>
                                        <td>Rs.{updateData.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="d-flex flex-row-reverse bg-dark text-white p-2" id="footerid">
                        <div class="py-3 px-4 text-right" >
                            <div class="mb-2">Grand Total</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{updateData.invoice_bill}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-2">=</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">Discount</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{updateData.discount}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-">-</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">GST</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{updateData.gst_amt}</div>
                        </div>
                        <div class="py-3 px-1 text-right" >
                            <div class="mb-2">+</div>
                        </div>
                        <div class="py-3 px-4 text-right">
                            <div class="mb-2">Sub-Total amount</div>
                            <div class="h3 font-weight-light" id="footerinn">Rs.{updateData.total}</div>
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
export default UpdateSuccess