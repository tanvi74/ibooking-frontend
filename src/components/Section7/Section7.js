import React from 'react';
import TextCard from '../common/TextCard/TextCard';
import { Col, Row } from 'react-bootstrap';
import Image2 from '../../images/grid-img-2.png';
import './Section7.css';

export default function Section6() {
    return (
        <div>
            <div>
            <Row className="g-6">
                <Col sm style={{ marginTop: "2.5rem"}}>
                    <Part2 />
                </Col>
                <Col sm className="imgPart7"><img src={Image2} alt="" className="img7" /> </Col>
            </Row>
        </div>
        </div>
    )
}

const Part2 = () => {
    return (
        <>
            <TextCard 
                heading="Finally! A booking software that really works for my business" 
                description="Give your business the perfect tool to grow and become more efficient. ibooking is designed to make the customer journey and the business process much more convenient, allowing you to focus on running the business." 
                descClass="descClassName"
                className="headingClass"
            />
            <button>
                Learn more
            </button>
        </>
    )
}
