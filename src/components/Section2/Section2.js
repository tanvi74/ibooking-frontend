import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Section2.css';

export default function Section2() {
    return (
        <div className="container-fluid">
            <Row>
                <Col lg={12}>
                <h2 className="head-title mb-3">Supercharge your business with ibooking</h2>
                <div>
                    <div className="paragraph">
                        Welcome to ibooking - the booking management system that works for your business. If you run your own business, you’ll know how difficult it is to keep on top of all the small - but important - details. So why not make things easier on yourself with ibooking? An innovative platform designed with businesses in mind, it allows your customers to easily browse, secure and manage bookings in just a few clicks - leaving you free to focus on what you do best. And if you’re in the market for local services in your area, ibooking is great news too. With our clever system, it couldn’t be easier to make arrangements with your choice of provider.
                    </div>
                    
                    <div className="paragraph">
                        Whether you’re a business looking for smart, <span>cloud-based booking system</span> or a customer searching for the best service, ibooking has got you covered.
                    </div>
                    
                    <div className="paragraph">
                        At ibooking, we provide a wide range of booking options for wedding services, car hire, coach hire, minibus hire, chauffeur services, event entertainment, wedding catering & event catering, mobile hair and makeup... and much more. Our business users are scattered all over the UK covering most locations including London, Birmingham, Manchester, Leeds, Derby, Coventry, Nottingham, Yorkshire, Bristol, Kent, Essex, Surrey, Berkshire, Middlesex, Bristol, Cardiff, Newport, Swansea, Edinburgh, Glasgow and many more cities.
                    </div>
                    
                    <div className="paragraph">
                        So whether you’re a limousine hire company wanting to give your booking system a professional touch - or a bride looking to secure the best services for your special day - you don’t need to look any further.
                    </div>
                </div> 
                </Col>
            </Row>
           
        </div>
    )
}
