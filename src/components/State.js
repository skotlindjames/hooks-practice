import React, {useContext} from 'react'
import {StateContext} from '../App'



function State() {
const state = useContext(StateContext)

    return (
        <div>
            <h1> {state} </h1>
        </div>
    )
}

export default State
