import React from 'react';
import { Card } from 'react-bootstrap';
import CardImg from '../../../images/cardimg.jpg';
import './ImageCard.css';

export default function ImageCard() {
    return (
        <Card>
            <Card.Img variant="top"  width={171} height={180} src={CardImg} />
            <Card.Body>
            <Card.Title className="cardHeading">Modern Well-Appointed Room</Card.Title>
            <Card.Text>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <div className="cardText">36b Talboat green, Liantrisant Wales, CF72 8AF</div>
            </Card.Text>
            </Card.Body>
      </Card>
    )
}
