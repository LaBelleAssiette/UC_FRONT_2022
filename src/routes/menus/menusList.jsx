import {useEffect, useState} from "react";
import {getMenus} from "../../services/menusService";

export default function MenusList() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        (async () => {
            const menus = await getMenus();
            setMenus(menus);
        })();
    },[]);

    return (
        <section>
            {menus.map((menu, key) => (
                <article key={key}>
                    <header>
                        <h1>{menu.title}</h1>
                    </header>
                    <ul>
                        <li>Entrée: {menu.starter}</li>
                        <li>Plat: {menu.plate}</li>
                        <li>Dessert: {menu.dessert}</li>
                    </ul>
                    <footer>
                        <small>{menu.author}</small>
                    </footer>
                </article>
            ))}
        </section>
    );
}