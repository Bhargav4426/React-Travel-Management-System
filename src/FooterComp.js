
import './FooterComp.css'
import facebook from './images/icons/facebook.png'
import gmail from './images/icons/gmail.png'
import twitter from './images/icons/twitter.png'
import instagram from './images/icons/instagram.png'
import linkedin from './images/icons/linkedin.png'
import youtube from './images/icons/youtube.png'
const FooterComp=()=>{
    return(
        <>
        <div className="footerbackground">
  <footer class="text-center text-lg-start text-white" style={{backgroundColor:'DarkSlateGrey'}}>
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Trinetra Tours Pvt.Ltd
            </h6>
            <p>
            Need reasons to travel? Are you searching for the ultimate travel inspiration? Well we have put down a motivating list for you to get intoxicated by the drug of travelling. So check them out and get ready to fulfil your wanderlust.
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Packages</h6>
            <p>
              <a class="text-white" href='/'>Domestic Tour Packages</a>
            </p>
            <p>
              <a class="text-white" href='/'>International Tour Packages</a>
            </p>
            <p>
              <a class="text-white" href='/'>Themes</a>
            </p>
            <p>
              <a class="text-white" href='/about'>About Us</a>
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i>17-4/6, Shivbhag, Ameerpet</p>
            <p><i class="fas fa-envelope mr-3"></i> trinetratourspvtltd@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 91 903 011 88</p>
            <p><i class="fas fa-print mr-3"></i> + 91 903 011 89</p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
            <a href="https://www.facebook.com/" role="button"><img src={facebook}/></a>
            <a href="https://www.twitter.com/"role="button"><img src={twitter}/></a>
            <a href="https://www.gamil.com/"role="button"><img src={gmail}/></a>
            <a href="https://www.instagram.com/"role="button"><img src={instagram}/></a>
            <a href="https://www.linkedin.com/" role="button"><img src={linkedin}/></a>
            <a href="https://www.youtube.com/" role="button"><img src={youtube}/></a>
          </div>
        </div>
      </section>
    <div class="row justify-content-center" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
        <div class="col-md-4" id="padding">© 2023 Copyright: <a class="text-white" href="https://trinetratourspvtltd.com/">trinetratourspvtltd.com</a></div>
    </div>
  </footer>
</div>
        
        </>
    )

}
export default FooterComp;