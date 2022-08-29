import React, {} from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/chefs">Chefs</Link></li>
                <li><Link to="/menus">Menus</Link></li>
            </ul>
        </header>
    );
}

export default Header;