import React, { useState } from 'react';
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import Headphone from '../../Assets/Products/Headphone.jpg';
import Lagage from '../../Assets/Products/Lagagebag.jpg';
import Watch from '../../Assets/Products/Watch.jpg';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Winter Black Jacket', price: 36.00, size: 'Medium', quantity: 1, image: Headphone },
        { id: 2, name: 'Swan Crop V-Neck Tee', price: 115.00, size: 'Small', quantity: 1, image: Lagage },
        { id: 3, name: 'Blue Solid Casual Shirt', price: 68.00, size: 'Large', quantity: 1, image: Watch },
    ]);

    const [couponCode, setCouponCode] = useState('');
    const [shipping] = useState(70.00);

    const handleQuantityChange = (id, change) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() + shipping;
    };

    return (
        <div className="cart-page">
            <PageTitle title="Cart" />
            <div className="cart-items">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>
                                        <span role="img" aria-label="remove">❌</span>
                                    </button>
                                </td>
                                <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
                                <td>
                                    {item.name}
                                    <br />
                                    Size: {item.size}
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <div className="quantity-control">
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </div>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="cart-actions">
                    <div className="coupon-section">
                        <input
                            type="text"
                            placeholder="Coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button>APPLY COUPON</button>
                    </div>
                    <button className="update-cart">Update Cart</button>
                </div>
            </div>
            <div className="cart-summary">
                <div className="shipping-calculation">
                    <h3>Calculate Shipping</h3>
                    <select>
                        <option>Select Country</option>
                    </select>
                    <input type="text" placeholder="State/country" />
                    <input type="text" placeholder="Postcode/zip" />
                    <button className="update-totals">Update Totals</button>
                </div>
                <div className="cart-totals">
                    <h3>Cart Totals</h3>
                    <table className="cart-totals-table">
                        <tbody>
                            <tr>
                                <td>Cart Subtotal:</td>
                                <td>${calculateSubtotal().toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping and Handling:</td>
                                <td>${shipping.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Order Total:</td>
                                <td>${calculateTotal().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="proceed-checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;