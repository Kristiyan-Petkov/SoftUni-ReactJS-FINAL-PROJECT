import {HeaderArea} from "../HeaderArea";
import {Welcome} from "../Welcome";
import {Services} from "../Services";
import {Promos} from "../Promos";
import {Footer} from "../Footer";

const Home = () => {
    const promoDeals = [
        {
          title: 'Analysis',
          subTitle: 'Insights and Reporting',
          description: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
          imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
          price: 40,
        },
        {
          title: 'Charting',
          subTitle: 'PowerPoint and Keynote charting',
          description: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
          imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
          price: 50,
        },
        {
          title: 'Data and KPI',
          subTitle: 'Databases and KPI sheets',
          description: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
          imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
          price: 60,
        },
      ]
    return (
        <div className="App">
            <HeaderArea />
            <main>
                <Welcome />
                <Services />
                <Promos promos={promoDeals} />
            </main>
            <Footer />
        </div >
    )
};

export default Home;