import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Product = ({ product }) => {
    const starArray = [];
    for(let i=0; i< product.star; i++) {
        starArray.push(<i class="fas fa-star"></i>)
    }
    return (
        <Container fluid className='ps-0 mb-5 bg-white'>
            <Row>
                <Col xm={12} sm={12} md={5} lg={3}>
                    <img src={product.img} className='p-2' alt="" />
                </Col>
                <Col xm={12} sm={12} md={7} lg={9}>
                    <div className="text-start p-3">
                        <h5 className='fw-normal'>{product.name}</h5>
                        <p className="fw-lighter">By {product.seller}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;