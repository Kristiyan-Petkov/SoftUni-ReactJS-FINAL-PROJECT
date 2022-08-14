// import { HeaderArea } from "./components/HeaderArea";
// import { Welcome } from "./components/Welcome";
// import { Services } from "./components/Services";
// import { Promos } from "./components/Promos";
// import { Footer } from "./components/Footer";
import Home from "./components/main/Home";
import Promotions from "./components/main/Promotions";
import ServicesPage from "./components/main/ServicesPage";
import { Routes, Route } from "react-router-dom";

function App() {
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
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="promotions" element={<Promotions promos={promoDeals}/>}></Route>
        <Route path="services" element={<ServicesPage/>}></Route>
      </Routes>

      {/* <HeaderArea />
      <main>
        <Welcome />
        <Services />
        <Promos promos={promoDeals} />
      </main>
      <Footer /> */}
    </div >
  );
}

export default App;
