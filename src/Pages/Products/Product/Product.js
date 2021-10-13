import React from 'react';
import { Badge, Col, Container, Row, Button } from 'react-bootstrap';
import ProductFeature from './ProductFeature/ProductFeature';
import StarRating from './StarRating/StarRating';

const Product = (props) => {
    const {star, img, name, seller, starCount, category, stock, price, shipping, features } = props.product;

    const starArray = [];

    for (let i = 0; i < star; i++) {
        starArray.push(<i className="fas fa-star"></i>)
    }
    if (star < 5) {
        for (let i = 0; i < (5 - star); i++) {
            starArray.push(<i className="far fa-star"></i>);
        }
    }

    return (
        <Container fluid className='ps-0 mb-5 bg-white'>
            <Row>
                <Col xm={12} sm={12} md={5} lg={3}>
                    <img src={ img} className='p-2' alt="" />
                </Col>
                <Col xm={12} sm={12} md={7} lg={9}>
                    <div className="text-start p-3">
                        <h5 className='fw-normal'>{name}</h5>
                        <p className="fw-lighter">By {seller}</p>
                        <div className="d-flex text-warning fs-5 align-items-baseline">
                            {
                                starArray.map(star => <StarRating key={starArray.indexOf(star)} star={star}></StarRating>)
                            }
                            <p className="text-success ps-3 fs-6">Ratings: {starCount}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div>
                                <Badge bg="info">{category}</Badge>
                                <p>Limited Stock. Only {stock} avaiable.</p>
                                <p className="fs-5">Price: {price} $</p>
                                <p className="fs-6 fw-lighter">Shipping: {shipping} $</p>
                                <Button
                                    onClick={() => props.addToCart(props.product)}
                                    style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "5px 50px" }}
                                    className="text-dark fw-bold border-0 d-block mb-2"><i className="fas fa-shopping-cart"></i> Add to Cart</Button>
                            </div>
                            <div>
                                <h5>Features:</h5>
                                <ul>
                                    {
                                        features?.map(feature => <ProductFeature feature={feature}></ProductFeature>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;