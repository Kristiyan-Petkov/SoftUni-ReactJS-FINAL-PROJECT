import { useState, useEffect } from "react"
import styles from './PromoDeal.module.css'

export const PromoDeal = (props) => {
    //useEffect only on load
    useEffect(() => {
        //NEED TO OPEN SERVICE DETAILS PANEL
        console.log('Mounting promos');
    }, []);

    const [highlighted, setHighlighted] = useState(false);
    // const [deleted, setDeleted] = useState(false);

    //to select elements
    const clickHandler = () => {
        setHighlighted(state => !state);
    }

    // const deleteHandler = () => {
    //     setDeleted(true);
    // }

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'orange';
    }
    // if (deleted) {
    //     style.backgroundColor = 'red';
    // }

    //useEffect on every change of state
    useEffect(() => {
        if (highlighted) {
            console.log(`${props.title} selected`);
        } else {
            console.log(`${props.title} de-selected`);
        }

    }, [highlighted, props.title]);

    //to delete an element
    // useEffect(() => {
    //     if (deleted) {
    //         console.log(`${props.title} has been removed`);
    //     }
    // }, [deleted, props.title]);

    return (<li style={style}>
        <img src={props.imgUrl} alt="offer" />
        <section className="info">
            <div>
                <h3>{props.title}</h3>
                <p>{props.subTitle}</p>
                <p>By: {props.owner}</p>
            </div>
            <div>
                {props.price}€/h
            </div>
        </section>
        <section className="moreInfo">
            <p>{props.description}</p>
            <button onClick={clickHandler}>Like</button>
            <button>DETAILS</button>
        </section>
    </li>)
}