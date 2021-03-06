import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Cart = ({ cart }) => {
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
    }
    let quantity = cart.reduce((previous, product) => previous + product.quantity, 0);
    let total = cart.reduce((previous, product) => previous + product.price * product.quantity, 0);
    let totalShipping = cart.reduce((previous, product) => previous + product.shipping * product.quantity, 0);
    let tax = (total * 10) / 100;
    let gt = total + totalShipping + tax;

    return (
        <div className="my-5 me-3">
            <h3 className="border-0 border-bottom border-3 my-5 lh-lg">Order Summary</h3>
            <ListGroup>
                <ListGroup.Item><h5>Items Ordered: {quantity}</h5></ListGroup.Item>
                <ListGroup.Item><p>Total: {total.toFixed(2)} $</p></ListGroup.Item>
                <ListGroup.Item><p>Shipping: {totalShipping.toFixed(2)} $</p></ListGroup.Item>
                <ListGroup.Item><p>Tax: {tax.toFixed(2)} $</p></ListGroup.Item>
                <ListGroup.Item><h5>Grand Total: {gt.toFixed(2)} $</h5></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Cart;