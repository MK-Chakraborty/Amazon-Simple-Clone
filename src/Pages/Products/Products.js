import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from './Product/Product';

const Products = () => {
    const products = useProducts();
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3}></Col>
                    <Col xs={12} sm={12} md={8} lg={9} className="border-0 border-start border-3 border-warning">
                        <h2 className="text-start lh-lg py-5"><span className="border-0 border-bottom border-3">All Products</span></h2>
                        <div>
                            {
                                products.map(product => <Product key={product.key} product={product}></Product>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Products;