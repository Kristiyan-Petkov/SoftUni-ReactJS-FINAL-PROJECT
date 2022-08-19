import { CatalogItem } from "./CatalogItem";

const Catalog = ({
    offers,
    taskDeleteHandler
}) => {
    const allDeals = offers.map((offer) => <CatalogItem key={offer._id} offer={offer} taskDeleteHandler={taskDeleteHandler}/>)
    return (<section className="offers">
        <h2>Catalog</h2>
        <p>Find the best solution to drive your business growth</p>
        <ul>
            {allDeals}
        </ul>
    </section>)
};

export default Catalog;