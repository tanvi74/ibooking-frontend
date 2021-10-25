import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function FooterComp() {
    return (
        <div>
            <Row>
                <Col sm>
                    <div className="FooterSec10">© 2020, ibooking.co.uk. All rights reserved.</div>
                </Col>
                <Col sm>
                    <div className="FooterSec10 design-mobo">Designed By MOBO</div>
                </Col>
            </Row>
        </div>
    )
}
