import React from 'react';
import { Button, Container } from 'react-bootstrap';

const LogInFooter = () => {
    return (
        <Container fluid className="border-0 border-top border-bottom border-3 bg-white-50 mb-3 py-3">
            <h6 className="lh-lg fs-6">See personalized recommendations</h6>
            <Button 
            style={{backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "8px 90px"}} 
            className="text-dark fw-bold border-0 d-block mx-auto mb-2">Sign in</Button>
            <small>Open Account? <a href="/">Start here</a>.</small>
        </Container>
    );
};

export default LogInFooter;