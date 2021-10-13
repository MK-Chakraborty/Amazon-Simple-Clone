import React from 'react';
import MenuNavBar from './MenuNavBar/MenuNavBar';
import TopNavBar from './TopNavBar/TopNavBar';

const Header = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <MenuNavBar></MenuNavBar>
        </div>
    );
};

export default Header;