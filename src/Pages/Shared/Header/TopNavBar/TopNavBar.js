import React, { useEffect, useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import logo from '../../../../images/logo.png'

const TopNavBar = () => {
    const [country, setCountry] = useState('');
    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => response)
            .then(data => setCountry(data.country))
            .catch((data, status) => {
                console.log('Request failed:', data);
            });
    }, [])

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
                    <div className="text-start">
                        <p className="text-white mb-0">Hello, Sign In</p>
                        <h5 className="text-white lh-sm fs-5">Log In Link</h5>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={1}>
                    <div className="d-flex align-items-center">
                        <div className="text-white fs-3 me-3">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div className="text-start">
                            <p className="text-white mb-0">Cart</p>
                            <h5 className="text-white lh-sm fs-5">{0}</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopNavBar;