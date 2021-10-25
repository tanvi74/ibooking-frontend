import React from 'react'
import NavbarComp from './Navbar/NavbarComp';
import bkg from '../../images/cardimg.jpg';
import './Section1.css';
import {  Col, Form, Button } from 'react-bootstrap';


export default function Section1() {
   
    return (
        <div>
            <div className="our-story-card">
                    <NavbarComp />  
                    <div className="heroCard">
                        <div className="heroCardinner">
                            <h1>Welcome to ibooking - let's get started!</h1>
                            <div>
                                <section id="hero" className="d-flex align-items-center   hv-100  enable_hero_black ib-hero">
                                    <div className="container-fluid">
                                       
                                            <Form>
                                                    <Col className="form-first-element">
                                                        <Form.Control placeholder="What would you like to book?" />
                                                    </Col>
                                                    <Col className="form-second-element">
                                                        <Form.Control placeholder="Location" />
                                                    </Col>
                                                    <Col className="form-button-element">
                                                        <div>
                                                            <Button type="submit" size="lg">Search</Button>
                                                        </div>
                                                    </Col>
                                                </Form>
                                           
                                    </div>
                                </section>
                            </div>
                        </div>
                        
                    </div>
                    <div className="img-wrapper">
                        <img alt="iBooking" src={bkg} className="bkgnd"/>
                    </div>
                      
            </div>
        </div>
    )
}
