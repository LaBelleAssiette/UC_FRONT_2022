export default function MenusList({menus}) {
    return (
        <section className="card-list">
            {menus.map((menu, key) => (
                <article key={key} className='card'>
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