import {HeaderArea} from "../HeaderArea";
import {Services} from "../Services";
import {Footer} from "../Footer";

const ServicesPage = () => {
    return (
        <div className="App">
            <HeaderArea />
            <main>
                <Services />
            </main>
            <Footer />
        </div >
    )
};

export default ServicesPage;