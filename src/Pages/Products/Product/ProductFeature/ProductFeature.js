import React from 'react';

const ProductFeature = ({ feature }) => {
    return (
        <li>{feature.description} : {feature.value}</li>
    );
};

export default ProductFeature;