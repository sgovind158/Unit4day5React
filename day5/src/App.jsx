
import './App.css';
import Navbar from './Componets/Navbar';
import Offers from './Componets/Offers';
import Filters from './Componets/Filters';
import Restaurant from './Componets/Restaurant';
import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from "./data/restaurants.json"
import { useState } from 'react';

const filters = {
  1 : "Cost High to Lost",
  2 : "Cost Lost to High",
  3 : "Ratings",
  4 : "Delivery Time",
  5 : "Relevance",
}



function App() {
  const [filterBy, setFilterby] = useState("")
  const [data,setData] = useState(restaurants)
  return (
    <div >
    <Navbar  {...userInfo.location}/>
   <Offers offers = {offers}/>
   <section className="near-you">
   <Filters 
    filters = {filters}/>
    currentFilteredBy = {filterBy}
    updatedFilter = {updatedFilter}
  <Restaurant key = {restaurants.id} restaurants={restaurants} />
  </section>
    </div>
  );
}


// https://raw.githubusercontent.com/riteshf/cherry/main/assets/offer1.jpeg
export default App;
////// 1 :48 : 31 second 