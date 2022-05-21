
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
  0 : "Cost High to Lost",
  1 : "Cost Lost to High",
  2 : "Ratings",
  3 : "Delivery Time",
  4 : "Relevance",
}

function App() {
  
  const [filterBy, setFilterby] = useState("")
  const [data,setData] = useState(restaurants)
  
  
  console.log(data,"this is my first data")
  const updatedFilter = (newFilter)=>{
    console.log(newFilter)
   

   switch (newFilter){
     case 0:{
      
       setFilterby(0);
     
    let arr =  data.sort((a,b)=> b.costForTwo - a.costForTwo )
      console.log(arr)
      
  //  console.log( setData([...arr]))   
       break;
     }

     case 1:{
       console.log("this is")
      setFilterby(1);
       data.sort((a,b)=> a.costForTwo - b.costForTwo)
      setData([...data])
      break;
    }
    case 2:{
      setFilterby(2);
      data.sort((a,b)=> b.rating - a.rating)
      // console.log(data)
       setData([...data])
       break;

     
    }

    case 3:{
      setFilterby(3);
      data.sort((a,b)=> b.deliveryTimings - a.deliveryTimings)
      // console.log(data)
       setData([...data])
       break;
     
    }

    case 4:{
      setFilterby(4);
      data.sort((a,b)=> b.rating - a.rating)
      // console.log(data)
       setData([...data])
       break;
      
      
    }
   }

  };
  return (
    <div >
    <Navbar  {...userInfo.location}/>
   <Offers offers = {offers}/>
   <section className="near-you">
     <Filters
    filters = {filters}
      currentFilteredBy = {filterBy}
      updatedFilter = {updatedFilter}
     />
  
    
  <Restaurant key = {restaurants.id} restaurants={data} />
  </section>
    </div>
  );
}


// https://raw.githubusercontent.com/riteshf/cherry/main/assets/offer1.jpeg
export default App;
////// 1 :48 : 31 second 