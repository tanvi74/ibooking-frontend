import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

export default function FooterComp() {
    return (
        <div className="footerComp">
            <Row>
                <Col sm>
                    <h4>About ibooking</h4>
                    <p>ibooking.co.uk is a cloud based booking management software which allows small businesses to manage their own bookings with convenience. ...
                        <a href="#" className="Read">Read more</a>
                    </p>
                    <Button className="businessBtn" >Business</Button>
                    <Button className="customerBtn">Customer</Button>
                </Col>
                <Col sm>
                    <Row>
                        <Col sm>
                            <h4>Company</h4>
                            <p>Search Item</p>
                            <p>Pricing</p>
                            <p>Business Profile</p>
                            <p>Contact</p>
                        </Col>
                        <Col sm>
                            <h4>Legal Stuff</h4>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>FAQ</p>
                        </Col>
                        <Col sm>
                            <h4>Get in Touch</h4>
                            <div>
                                <span className="fab fa-twitter icon"></span>
                                <span className="fab fa-facebook-square icon"></span>
                            </div>
                            <div>
                                <span className="fab fa-instagram icon"></span>
                                <span className="fab fa-twitter icon"></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
