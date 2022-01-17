import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'


const Slider = () => {
    return (
  <div className='carrousel-contenedor'>
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider
