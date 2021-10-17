import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo_dark.png'

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={8} lg={5} className="mx-auto">
                    <img src={logo} alt="" />
                    <div className="border border-3 mb-5 p-3">
                        <h3 className="text-start fs-3 lh-lg">Sign-In</h3>
                        <h6 className="text-start fs-6">Email</h6>
                        <input type="email" placeholder='email' className="w-100 p-2 border border-3 border-warning rounded-3" />
                        <h6 className="text-start fs-6 mt-3">Password</h6>
                        <input type="password" placeholder='password' className="w-100 p-2 border border-3 border-warning rounded-3" />
                        <Button
                            style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "8px 0" }}
                            className="text-dark fw-bold border-0 mt-3 w-100">Sign In</Button>
                    </div>
                    <div className="border border-3 mb-5 p-3">
                        <h6 className="text-start fs-6">Have an Google Account?</h6>
                        <Button
                            onClick={handleGoogleSignIn}
                            style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "8px 0" }}
                            className="text-dark fw-bold border-0 mt-3 w-100">Google Sign In</Button>
                    </div>
                    <div className="border-0 border-top border-3 mb-5 p-3">
                        <p>New To Amazon</p>
                        <Button
                            style={{ backgroundColor: "silver", padding: "5px 0" }}
                            className="text-dark fw-bold border-2 border-dark w-100">Sign Up</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;