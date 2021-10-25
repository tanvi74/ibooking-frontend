import React from 'react';
import TextCard from '../common/TextCard/TextCard';
import { Col, Row } from 'react-bootstrap';
import Image1 from '../../images/grid-img-1.png';
import './Section6.css';


export default function Section5() {
    return (
        <div>
            <div>
            <Row className="g-6">
                <Col sm style={{textAlign: "center"}}><img src={Image1} alt="" className="img6" /> </Col>
                <Col sm className="part2" >
                    <Part2 />
                </Col>
            </Row>
        </div>
        </div>
    )
}

const Part2 = () => {
    return (
        <>
            <TextCard 
                heading="Mobile apps coming soon!" 
                description="Our team are working hard to develop awesome apps for our customers as well as our partners. The ibooking apps will be available in iOS and Android." 
                descClass="descClass"
            />
            <div className="g-6 btns">
                <button className="google-store-btn">
                    <div className="btn-app-store">
                        <i className="fab fa-google-play D-hover"></i>
                        <span className="small">Get it on</span>
                        <span className="big">Google Play</span>
                    </div>
                </button>
                <button className="apple-store-btn">
                    <div className="btn-app-store apple-btn">
                        <i className="fab fa-apple  D-hover"></i>
                        <span className="small">Download on the</span>
                        <span className="big">App Store</span>
                    </div>
                </button>
            </div>
        </>
    )
}
