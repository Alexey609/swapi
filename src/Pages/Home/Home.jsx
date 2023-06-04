import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import homePicture from '../../assets/sw.jpeg';

export const Home = () => {

    return (
        <Container>
            <Row>
                <Col md="11" sm="9" xs="9">
                    <Image className="m-5" src={homePicture} fluid />
                </Col>
            </Row>
        </Container>
    );
};