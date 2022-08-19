import { PromoDeal } from "./PromoDeal"

export const Promos = ({
    offers,
}) => {
    const allDeals = offers.map((offer) => <PromoDeal key={offer._id} {...offer}/>)
    return (<section className="offers">
        <h2>What's new?</h2>
        <p>The latest services offered. Find the one for you...</p>
        <ul>
            {allDeals}
        </ul>
    </section>)
}