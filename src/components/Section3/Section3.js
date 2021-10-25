import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardImg from '../../images/cardimg.jpg';
import './Section3.css';

export default function Section8() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div>
            <h2 className="head-title mb-3">Popular services near you</h2>
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                itemClass="carousel-item-padding-40-px"
                renderButtonGroupOutside={true}
                infinite={true}
            >
                {Array.from({ length: 8 }).map((_, idx) => (
                 
                            <CardComponent />
                     
                ))}
            </Carousel>
        </div>
    )
}

const CardComponent = () => (
    <Card>
        <Card.Img variant="top"  height={96} src={CardImg} />
        <Card.Body>
            <Card.Title className="cardHeading">Business Name</Card.Title>
        </Card.Body>
    </Card>
)
