import { CatalogItem } from "./CatalogItem";

const Catalog = (props) => {
    const allDeals = props.promos.map((promoDeal) => <CatalogItem key={promoDeal._id} {...promoDeal}/>)
    return (<section className="offers">
        <h2>Catalog</h2>
        <p>Find the best solution to drive your business growth</p>
        <ul>
            {allDeals}
        </ul>
    </section>)
};

export default Catalog;