import {Promos} from "../Promos";
// import { useParams } from "react-router-dom";

const Promotions = (props) => {
    // const {productId} = useParams();
    return (
        <div className="App">
            <main>
                <Promos promos={props.promos} />
            </main>
        </div >
    )
};

export default Promotions;