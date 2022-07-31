import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    // const [isOnline, setIsOnline] = useState(null);

    // useEffect(() => {    function handleStatusChange(status) {      setIsOnline(status.isOnline);    }    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    return () => {      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);    };  });
    return (
        <header>
            <ul>
                <li><Link to="/menus">Menus</Link></li>
                <li><Link to="/chefs">Chefs</Link></li>
            </ul>
        </header>
    );
}

export default Header;