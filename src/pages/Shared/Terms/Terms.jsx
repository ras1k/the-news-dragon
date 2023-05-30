import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet, cupiditate dolorem dolore fugiat quia unde. Esse neque voluptas aperiam.</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;