import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.eatenSushi)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatSushi(props.sushi.price, props.sushi.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushi.includes(props.sushi.id) ?
          // false ?
            null
          :
            <img src={props.sushi.img_url} width="100%"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi