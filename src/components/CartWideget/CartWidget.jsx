import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div style={{ display: "flex", width: "35px", justifyContent: "space-between" }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#09776a", }} />
            <span>4</span>
        </div>
    );
};

export default CartWidget;