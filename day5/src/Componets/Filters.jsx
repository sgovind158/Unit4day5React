import React from 'react'

const Filters = ({ filters, currentFilteredBy,updatedFilter}) => {
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
    <div className="restaurant-options">
        {Object.entries(filters).map((key,value)=>(     
         
          

    <div key = {value}  className={`restaurant-option ${currentFilteredBy === value ?"underline" :""}`} onClick= {() => 
       
            updatedFilter(value)
         }
    
    
    > 
              {key}
     </div>

        ))}
       

        
        
    </div>
</div>
  )
}

export default Filters
