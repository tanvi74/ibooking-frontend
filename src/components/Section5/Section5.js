import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TextCard from '../common/TextCard/TextCard'

export default function Section4() {
    return (
        <>
            <Row className="g-6">
                <Col sm={5} className="col1Section4">
                    <TextCard 
                        heading="Supercharge your business with ibooking" 
                        description="ibooking is two-sided! So whether you are a customer looking to book a service or a business looking for a great (cloud-based) booking software." 
                        descClass="descClass"
                    />
                </Col>
                <Col sm={3}>
                    <TextCard  heading="2000+" description="Businesses use ibooking." className="addMargin"/>
                    <TextCard  heading="Nationwide" description="We cover all UK." className="addMargin"/>
                </Col>
                <Col sm={3}>
                    <TextCard  heading="1.5M+" description="Customers have used ibooking." className="addMargin"/>
                    <TextCard  heading="It's FREE" description="All standard features are free" className="addMargin"/>
                </Col>
            </Row>
        </>
    )
}
