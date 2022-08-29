async function getMenus() {
    const res = await fetch('http://localhost:2001/menus');
    return await res.json();
}

async function addMenu(menu) {
    const apiUrl = 'http://localhost:2001/menus';

    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menu)
    };

    try {
        const res = await fetch(apiUrl, requestMetadata);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
 
}

export { getMenus, addMenu };