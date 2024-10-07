import React, { cloneElement, Component, useState } from 'react'
import { IncrementAction,DecrementAction } from '../action'
import {connect} from 'react-redux'

const Counter = ({value,IncrementAction,DecrementAction}) => {
    // const[count, setCount]=useState(0)
    // const incrementFunc=()=>{
    //     setCount(count+1)
    // }
  return (
    <>
    <h1>Counter App</h1>
    <h4>Counter:{value}</h4>

    {/* <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Increment 
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrement
      </button>
    </div> */}
        <div className="card">
      <button onClick={IncrementAction}>Increment</button>
      <button onClick={DecrementAction}>Decrement</button>
    </div>

  </>
  )
}

// Mapping function for state
const mapState=(state)=>({value:state})


//Mapping function for actions
const mapDispatch={
  IncrementAction,
  DecrementAction
}

export default connect(mapState,mapDispatch) (Counter)
