import { useState, useEffect } from "react"
import styles from './PromoDeal.module.css'

export const CatalogItem = ({
    offer,
    taskDeleteHandler
}) => {
    //useEffect only on load
    useEffect(() => {
        //NEED TO OPEN SERVICE DETAILS PANEL
        console.log('Mounting promos');
    }, []);

    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    //to select elements
    const clickHandler = () => {
        setHighlighted(state => !state);
    }

    const deleteHandler = () => {
        setDeleted(true);
    }
    let style = {};
    if (highlighted) {
        style.backgroundColor = 'orange';
    }
    if (deleted) {
        style.backgroundColor = 'red';
    }

    //useEffect on every change of state
    useEffect(() => {
        if (highlighted) {
            console.log(`${offer.title} selected`);
        } else {
            console.log(`${offer.title} de-selected`);
        }

    }, [highlighted, offer.title]);

    //to delete an element
    useEffect(() => {
        if (deleted) {
            console.log(`${offer.title} has been removed`);
        }
    }, [deleted, offer.title]);

    return (<li style={style}>
        <img src={offer.imgUrl} alt="offer" />
        <section className="info">
            <div>
                <h3>{offer.title}</h3>
                <p>{offer.subTitle}</p>
                <p>By: {offer.owner}</p>
            </div>
            <div>
                {offer.price}€/h
            </div>
        </section>
        <section className="moreInfo">
            <p>{offer.description}</p>
            <button onClick={clickHandler}>Like</button>
            {/* <button style={styles} className={styles['delete-button']} onClick={deleteHandler}>Delete</button> */}
            <button style={styles} className={styles['delete-button']} onClick={() => taskDeleteHandler(offer._id)}>Delete</button>
            <button>DETAILS</button>
        </section>
    </li>)
}