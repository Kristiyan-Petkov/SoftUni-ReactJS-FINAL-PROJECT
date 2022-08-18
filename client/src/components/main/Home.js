import {HeaderArea} from "../HeaderArea";
import {HeadBlock} from "../HeadBlock";
import {Welcome} from "../Welcome";
import {Services} from "../Services";
import {Promos} from "../Promos";
import {Footer} from "../Footer";

const Home = (props) => {
    return (
        <div className="App">
            <main>
                <HeadBlock />
                <Welcome />
                <Services />
                <Promos promos={props.promos} />
            </main>
            <Footer />
        </div >
    )
};

export default Home;