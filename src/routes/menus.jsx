import {useEffect, useState} from "react";
import {getMenus} from "../services/menusService";
import MenusList from "./menus/menusList";
import MenusAdd from "./menus/menusAdd";

export default function Menus() {
    const [menus, setMenus] = useState([]);

    async function getMenusList() {
        const menus = await getMenus();
        setMenus(menus);
    }
    useEffect(() => {
        (async () => {
            await getMenusList();
        })();
    },[]);

    return (
        <>
            <div>
                <h1>Menus</h1>
                <MenusAdd updateList={getMenusList}/>
            </div>
            <MenusList menus={menus}/>
        </>
    );
}