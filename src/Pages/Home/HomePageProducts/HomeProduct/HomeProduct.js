import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HomeProduct = ({product}) => {
    
    return (
        <Card className="mb-4 mx-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" className="p-2" src={product.img} />
            <Card.Body>
                <Button variant="outline-secondary">Buy Now</Button>
            </Card.Body>
        </Card>
    );
};

export default HomeProduct;