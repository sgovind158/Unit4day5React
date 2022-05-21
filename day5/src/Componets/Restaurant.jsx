import React from 'react'
import Restaurant1 from './Restaurant1'

const Restaurant = (props) => {
  return (
    <div className="container divider">
       <div className="cards">
               
               {props.restaurants.map((restaurants)=>(
                   <Restaurant1 key = {restaurants.id} restaurants ={restaurants}/>

                   
               ))} 
                  
             
           </div>    
        </div> 
  )
}

export default Restaurant
