import React from 'react';
import TextCard from '../common/TextCard/TextCard';
import { Col, Row } from 'react-bootstrap';
import Image3 from '../../images/grid-img-3.png';
import Button from './Button';
import './Section8.css';

export default function Section7() {
    return (
        <div>
            <div>
            <Row className="g-6">
                <Col sm style={{ marginTop: "2.5rem"}}>
                    <Part2 />
                </Col>
                <Col sm className="imgPart"><img src={Image3} alt=""  className="img8"/> </Col>
            </Row>
        </div>
        </div>
    )
}

const Part2 = () => {
    return (
        <>
            <TextCard 
                heading="Booking management software to suit your business" 
                description="Simple, flexible and powerful booking software for your business, and it's totally FREE!" 
                descClass="descClassName7"
                className="headingClass7"
            />
            <Button text=" Coach & bus hire booking software  "/>
            <Button text=" Bouncy castle hire booking software  "/>
            <Button text=" Mobile hair & makeup artist booking software "/>
            <button className="smallest-btn">
            Learn more about our cloud based booking management software
            </button>
        </>
    )
}
