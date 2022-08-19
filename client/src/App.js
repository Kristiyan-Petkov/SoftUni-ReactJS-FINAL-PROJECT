import { HeaderArea } from "./components/HeaderArea";
// import { Welcome } from "./components/Welcome";
// import { Services } from "./components/Services";
// import { Promos } from "./components/Promos";
import { Footer } from "./components/Footer";
import Home from "./components/main/Home";
import Catalog from "./components/Catalog";
import Promotions from "./components/main/Promotions";
import ServicesPage from "./components/main/ServicesPage";
import P404 from "./components/main/P404";
import Logout from "./components/main/Logout";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  //ATTENTION FOLLOWING CODE TO DELETE ITEM:
  const [offers, setOffers] = useState([{
    _id: 'ejbzvlzqbvoqbvozvbzee',
    owner: 'Tom Consult',
    title: 'Analysis',
    subTitle: 'Insights and Reporting',
    description: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
    imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
    price: 40,
  },
  {
    _id: 'nvjqoznnqsnqpqssvioneoiv',
    owner: 'Nivis',
    title: 'Charting',
    subTitle: 'PowerPoint and Keynote charting',
    description: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
    imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
    price: 50,
  },
  {
    _id: 'svsqvsdv9nnbbbbsposjdc',
    owner: 'Jeremy Analytica',
    title: 'Data and KPI',
    subTitle: 'Databases and KPI sheets',
    description: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
    imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
    price: 60,
  },])

  // const offers = [
  //   {
  //     _id: 'ejbzvlzqbvoqbvozvbzee',
  //     owner: 'Tom Consult',
  //     title: 'Analysis',
  //     subTitle: 'Insights and Reporting',
  //     description: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
  //     imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
  //     price: 40,
  //   },
  //   {
  //     _id: 'nvjqoznnqsnqpqssvioneoiv',
  //     owner: 'Nivis',
  //     title: 'Charting',
  //     subTitle: 'PowerPoint and Keynote charting',
  //     description: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
  //     imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
  //     price: 50,
  //   },
  //   {
  //     _id: 'svsqvsdv9nnbbbbsposjdc',
  //     owner: 'Jeremy Analytica',
  //     title: 'Data and KPI',
  //     subTitle: 'Databases and KPI sheets',
  //     description: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
  //     imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
  //     price: 60,
  //   },
  // ];

  //ATTENTION FOLLOWING CODE TO DELETE ITEM:
  const taskDeleteHandler = (itemId) => {
    console.log('Need to delete item: ' + itemId);
    setOffers(state => state.filter(x => x._id != itemId))
  }

  return (
    <div className="App">
      <HeaderArea />
      <Routes>
        <Route path="/" element={<Home offers={offers}/>}></Route>
        <Route path="/catalog" element={<Catalog offers={offers} taskDeleteHandler={taskDeleteHandler}/>}></Route>
        <Route path="/about" element={<ServicesPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<P404/>}></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
