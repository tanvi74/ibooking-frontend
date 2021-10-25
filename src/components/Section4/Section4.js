import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ImageCard from './ImageCard/ImageCard'

export default function Section3() {
    return (
        <>
            <h2 className="head-title mb-3">Featured Businesses near you</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <ImageCard/>
                        </Col>
                    ))}
                </Row>
        </>
    )
}
