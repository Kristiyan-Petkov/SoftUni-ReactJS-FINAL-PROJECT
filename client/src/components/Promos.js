import { PromoDeal } from "./PromoDeal"

export const Promos = (props) => {
    const allDeals = props.promos.map((promoDeal) => <PromoDeal key={promoDeal._id} {...promoDeal}/>)
    return (<section className="offers">
        <h2>What's new?</h2>
        <p>The latest services offered. Find the one for you...</p>
        <ul>
            {allDeals}
        </ul>
    </section>)
}