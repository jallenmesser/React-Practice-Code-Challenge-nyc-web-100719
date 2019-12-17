import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiArray = props.sushi.slice(props.sushiPosition, props.sushiPostition + 4)
  return (
    <Fragment>
      <div className="belt">
        {sushiArray.slice(-4).map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer