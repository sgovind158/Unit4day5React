import React from 'react'

const Offers = (props) => {
  return (
    <section className="offers">
    <div className="container">

        {props.offers.map((el,index)=>(
            <img key={index} className="offer" src={el}/>
        )
         
        )}
      
       
    </div>
</section>
  )
}

export default Offers
