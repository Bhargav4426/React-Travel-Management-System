import cursedom1 from './images/curse1.jpg'
import cursedom2 from './images/curse2.jpg'
import cursedom3 from './images/curse3.jpg'
import cursedom4 from './images/curse4.jpg'
import cursedom5 from './images/curse5.jpg'
import curseinter1 from './images/curseinter1.jpg'
import curseinter2 from './images/curseinter2.jpg'
import curseinter3 from './images/curseinter3.jpg'
import curseinter4 from './images/curseinter4.jpg'
import curseinter5 from './images/curseinter5.jpg'
import './HomePage.css'
import { Carousel } from 'react-bootstrap'
const HomePage=()=>{
    return(
        <>
        <div className="homepagebackground">
        <div className="headerhome"><h1>Trinetra Tours<span>Pvt ltd</span></h1></div>
          <div className="borderdiv">
            <div class='box'>
        <Carousel className="carousel">
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100" id="image"
          src={cursedom1}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>INDIA GATE</h3>
          <p>India Gate is one of many British monuments built by order of the Imperial War Graves Commission (later renamed Commonwealth War Graves Commission).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={cursedom2}
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>TAJ MAHAL</h3>
          <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={cursedom3}
          alt="Third slide"
        />

        <Carousel.Caption className='carousel-caption'>
          <h3>VARANASI</h3>
          <p>The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={cursedom4}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>RED FORT</h3>
          <p>
          The Red Fort Complex was built as the palace fort of Shahjahanabad – the new capital of the fifth Mughal Emperor of India, Shah Jahan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={cursedom5}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>GOLDEN TEMPLE</h3>
          <p>
          The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
<div className="borderdiv">
        <Carousel className="carousel">
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={curseinter1}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>BANGKOK</h3>
          <p>Bangkok, Thai Krung Thep, city, capital, and chief port of Thailand. It is the only cosmopolitan city in a country of small towns and villages and is Thailand's cultural and commercial centre. Bangkok is located on the delta of the Chao Phraya River, about 25 miles (40 km) from the Gulf of Thailand.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={curseinter2}
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>DUBAI</h3>
          <p>Dubai, also spelled Dubayy, city and capital of the emirate of Dubai, one of the wealthiest of the seven emirates that constitute the federation of the United Arab Emirates, which was created in 1971 following independence from Great Britain.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={curseinter3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>THAILAND</h3>
          <p>
          Thailand is a multi-ethnic nation with a population of 64.1 million. Thailand's climate ranges from the sub-tropical to the tropical zones, with three distinct seasons.
          </p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={curseinter4}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>MALDIVES</h3>
          <p>
          The Maldives is an independent island country in the north-central Indian Ocean. The islands that make up the country extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselitems">
        <img
          className="d-block w-100"
          src={curseinter5}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>SINGAPORE</h3>
          <p>
          Singapore, officially the Republic of Singapore, is a sovereign country as well as a city-state. It is an island state at the southern end of the Malay Peninsula in Asia, between the Straits of Malacca and the South China Sea.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
</div>
</div>
        </>
    )

}
export default HomePage