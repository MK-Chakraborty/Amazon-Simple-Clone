import React, { useEffect, useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth'
import useCart from '../../../../hooks/useCart';
import useProducts from '../../../../hooks/useProducts';
import logo from '../../../../images/logo.png'

const TopNavBar = () => {
    const [country, setCountry] = useState('');
    let history = useHistory();
    const { user, logOut } = useAuth();

    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => response)
            .then(data => setCountry(data.country))
            .catch((data, status) => {
                console.log('Request failed:', data);
            });
    }, []);

    const handleSignIn = () => {
        history.push('/signin');
    }

    const products = useProducts();
    const [cart] = useCart(products);
    const quantity = cart.reduce((previous, product) => previous + product.quantity, 0);


    return (
        <Container fluid>
            <Row className="bg-dark px-5 pt-2">
                <Col xs={6} sm={6} md={6} lg={1}>
                    <img src={logo} className="w-100" alt="" />
                </Col>
                <Col xs={6} sm={6} md={6} lg={1}>
                    <div className="d-flex align-items-center">
                        <div className="text-white fs-3 me-3">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text-start">
                            <p className="text-white mb-0">Deliver To</p>
                            <h5 className="text-white lh-sm fs-5">{country}</h5>
                        </div>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={7}>
                    <InputGroup className="pt-1 px-5">
                        <FormControl
                            placeholder="Search"
                        />
                        <Button variant="warning" id="button-addon2">
                            <i className="fas fa-search"></i>
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs={6} sm={6} md={6} lg={1}>
                    {
                        user.email ? <div className="text-start">
                            <p className="text-white mb-1">Hello, <span className="text-warning">{user.displayName}</span></p>
                            <Button
                                onClick={logOut}
                                style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "5px 30px" }}
                                className="text-dark fw-bold border-0 d-block mb-2">Sign Out</Button>
                        </div> :
                            <div className="text-start">
                                <p className="text-white mb-1">Hello, Sign In</p>
                                <Button
                                    onClick={handleSignIn}
                                    style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "5px 30px" }}
                                    className="text-dark fw-bold border-0 d-block mb-2">Sign In</Button>
                            </div>
                    }
                </Col>
                <Col xs={6} sm={6} md={6} lg={1}>
                    <div className="d-flex align-items-center">
                        <div className="text-white fs-3 me-3">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="text-start">
                            <p className="text-white mb-0">Cart</p>
                            <h5 className="text-white lh-sm fs-5">{quantity}</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopNavBar;