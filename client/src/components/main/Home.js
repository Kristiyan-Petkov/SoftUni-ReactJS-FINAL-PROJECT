import {HeadBlock} from "../HeadBlock";
import {Welcome} from "../Welcome";
import {Services} from "../Services";
import {Promos} from "../Promos";

const Home = (props) => {
    return (
        <div className="App">
            <main>
                <HeadBlock />
                <Welcome />
                <Services />
                <Promos promos={props.promos} />
            </main>
        </div >
    )
};

export default Home;