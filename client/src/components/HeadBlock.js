import {Link} from 'react-router-dom';

export const HeadBlock = () => {
    return (
        <>
        <section className="site-header">
        <h1>NIVIS SERVICES HELP YOUR BUSINESS GROW</h1>
        <Link to="/catalog">
            <button>SEE CATALOG</button>
        </Link>
        </section>
        </>
    )
}