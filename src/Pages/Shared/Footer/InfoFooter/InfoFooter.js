import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../../images/logo.png'

const InfoFooter = () => {
    return (
        <Container fluid className="bg-dark py-5">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-start text-white">
                        <h5 className="fs-5 lh-lg">Get to Know Us</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-start text-white">
                        <h5 className="fs-5 lh-lg">Make Money with Us</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>Sell products on Amazon</li>
                            <li>Sell on Amazon Business</li>
                            <li>Sell apps on Amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise Your Products</li>
                            <li>Self-Publish with Us</li>
                            <li>Host an Amazon Hub</li>
                            <li>› See More Make Money with Us</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-start text-white">
                        <h5 className="fs-5 lh-lg">Get to Know Us</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>Amazon Business Card</li>
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-start text-white">
                        <h5 className="fs-5 lh-lg">Get to Know Us</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>Amazon and COVID-19</li>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shipping Rates & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Amazon Assistant</li>
                            <li>Help</li>
                        </ul>
                    </Col>
                </Row>
                <img src={logo} className="pt-5" alt="" />
            </Container>
        </Container>
    );
};

export default InfoFooter;