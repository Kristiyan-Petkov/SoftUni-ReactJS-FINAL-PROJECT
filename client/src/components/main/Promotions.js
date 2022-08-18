import {HeaderArea} from "../HeaderArea";
import {Promos} from "../Promos";
import {Footer} from "../Footer";
// import { useParams } from "react-router-dom";

const Promotions = (props) => {
    // const {productId} = useParams();
    return (
        <div className="App">
            <main>
                <Promos promos={props.promos} />
            </main>
            <Footer />
        </div >
    )
};

export default Promotions;