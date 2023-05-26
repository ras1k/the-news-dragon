import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Home></Home>
        </div>
    );
};

export default Main;