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
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ProductsPageWithSidebar = () => {
    const [filter, setFilter] = useState('All');
    const [priceRange, setPriceRange] = useState([10, 29]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { id: 1, name: 'Headphone', price: 32.00, category: 'Cyber', image: Headphone },
        { id: 2, name: 'Lagage', price: 520.00, category: 'Digital', image: Lagage },
        { id: 3, name: 'Watch', price: 42.00, category: 'Technology', image: Watch },
        { id: 4, name: 'Headset', price: 22.00, category: 'Cyber', image: Headset },
        { id: 5, name: 'Battery', price: 34.00, category: 'Digital', image: Battery },
        { id: 6, name: 'Charger', price: 25.00, category: 'Software', image: Charger },
        { id: 7, name: 'USB Cable', price: 20.00, category: 'Technology', image: UsbCable },
        { id: 8, name: 'SD Card', price: 40.00, category: 'Development', image: SdCard },
        { id: 9, name: 'Cyber Item 1', price: 35.00, category: 'Cyber', image: Headphone },
        { id: 10, name: 'Digital Item 1', price: 55.00, category: 'Digital', image: Battery },
        { id: 11, name: 'Software Item 1', price: 28.00, category: 'Software', image: Charger },
        { id: 12, name: 'Technology Item 1', price: 45.00, category: 'Technology', image: UsbCable },
        { id: 13, name: 'Development Item 1', price: 42.00, category: 'Development', image: SdCard },
    ];

    const categories = ['All', 'Cyber', 'Digital', 'Software', 'Technology', 'Development'];

    const handlePriceFilter = () => {
        const filtered = products.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        setFilteredProducts(filtered);
    };

    const handleCategoryFilter = (category) => {
        setFilter(category);
        setFilteredProducts([]);
    };

    const displayProducts = filteredProducts.length > 0
        ? filteredProducts
        : filter === 'All' ? products : products.filter(product => product.category === filter);

    const renderStars = () => {
        return <span className="stars">★★★★★</span>;
    };

    return (
        <div className="products-page-with-sidebar">
            <PageTitle title="Products" />
            <div className="page-content">
                <aside className="sidebar">
                    <div className="sidebar-search">
                        <input type="text" placeholder="Search here" className="search-input" />
                        <button className="search-button">Q</button>
                    </div>
                    <div className="categories-section">
                        <h3>Categories</h3>
                        <ul>
                            <li>► Cloud Solution</li>
                            <li>► Cyber Data</li>
                            <li>► SEO Marketing</li>
                            <li>► UI/UX Design</li>
                            <li>► Web Development</li>
                            <li>► Artificial Intelligence</li>
                        </ul>
                    </div>
                    <div className="filter-price-section">
                        <h3>Filter by Price</h3>
                        <div className="price-range-slider">
                            <Slider
                                range
                                min={10}
                                max={60}
                                value={priceRange}
                                onChange={setPriceRange}
                            />
                        </div>
                        <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
                        <button onClick={handlePriceFilter}>Filter</button>
                    </div>
                    <div className="popular-products-section">
                        <h3>Popular Products</h3>
                        <div className="popular-product">
                            <img src={Headset} alt="Best Headset" />
                            <p>Best Headset <br/> $45.00</p>
                        </div>
                        <div className="popular-product">
                            <img src={Battery} alt="Quality Battery" />
                            <p>Quality Battery <br/> $34.00</p>
                        </div>
                        <div className="popular-product">
                            <img src={Watch} alt="Smart Watch" />
                            <p>Smart Watch <br/> $29.00</p>
                        </div>
                    </div>
                </aside>
                <main className="product-grid-section">
                    <div className="filter-bar">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-button ${filter === category ? 'active' : ''}`}
                                onClick={() => handleCategoryFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className={`product-grid ${filter !== 'All' ? 'filtered' : ''}`}>
                        {displayProducts.map(product => (
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
                </main>
            </div>
        </div>
    );
};

export default ProductsPageWithSidebar;