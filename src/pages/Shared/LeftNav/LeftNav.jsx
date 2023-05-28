import React, { useEffect, useState } from 'react';
import './LeftNav.css'
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4 className='mb-2'>All Category</h4>
            <div className='m-0 '>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link className='links p-1 text-decoration-none text-black' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;