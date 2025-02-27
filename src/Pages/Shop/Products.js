import React, { useState } from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import Headphone from '../../Assets/Products/Headphone.jpg';
import Lagage from '../../Assets/Products/Lagagebag.jpg';
import Watch from '../../Assets/Products/Watch.jpg';
import Headset from '../../Assets/Products/Headset.jpg';
import Battery from '../../Assets/Products/Battery.jpg';
import Charger from '../../Assets/Products/Charger.jpg';
import UsbCable from '../../Assets/Products/USB.jpg';
import SdCard from '../../Assets/Products/SD-Card.jpg';

const Products = () => {
    const [filter, setFilter] = useState('All');

    const products = [
        { id: 1, name: 'Headphone', price: 32.00, category: 'Cyber', image: Headphone },
        { id: 2, name: 'Lagage', price: 52.00, category: 'Digital', image: Lagage },
        { id: 3, name: 'Watch', price: 42.00, category: 'Technology', image: Watch },
        { id: 4, name: 'Headset', price: 22.00, category: 'Cyber', image: Headset },
        { id: 5, name: 'Battery', price: 34.00, category: 'Digital', image: Battery },
        { id: 6, name: 'Charger', price: 25.00, category: 'Software', image: Charger },
        { id: 7, name: 'USB Cable', price: 20.00, category: 'Technology', image: UsbCable },
        { id: 8, name: 'SD Card', price: 40.00, category: 'Development', image: SdCard },
    ];

    const categories = ['All', 'Cyber', 'Digital', 'Software', 'Technology', 'Development'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(product => product.category === filter);

    const renderStars = () => {
        return <span className="stars">★★★★★</span>;
    };

    return (
        <div className="products-page">
            <PageTitle title="Products" />
            <div className="filter-bar">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={`product-grid ${filter !== 'All' ? 'filtered' : ''}`}>
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p className="price">${product.price.toFixed(2)}</p>
                            {renderStars()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;