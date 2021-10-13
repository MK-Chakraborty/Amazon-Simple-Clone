import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Product = ({product}) => {
    return (
        <Container fluid>
            <Row>
                <Col xm={12} sm={12} md={5} lg={4}></Col>
            </Row>
        </Container>
    );
};

export default Product;