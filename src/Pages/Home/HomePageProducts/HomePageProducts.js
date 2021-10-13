import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import HomeProduct from './HomeProduct/HomeProduct';
import './HomePageProducts.css'

const HomePageProducts = () => {
    const products = useProducts();
    return (
        <Container fluid className="px-5 position-relative overPosition">
            <div className="d-flex flex-wrap justify-content-around">
                {
                    products.map(product => <HomeProduct key={product.key} product={product}></HomeProduct>)
                }
            </div>
        </Container>
    );
};

export default HomePageProducts;