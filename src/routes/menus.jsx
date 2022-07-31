import React, { useState, useEffect } from 'react';

function PageContent(props) {
    // const [isOnline, setIsOnline] = useState(null);
    
    // useEffect(() => {    function handleStatusChange(status) {      setIsOnline(status.isOnline);    }    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    return () => {      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);    };  });
    return (<div>

    </div>);
}

export default PageContent;