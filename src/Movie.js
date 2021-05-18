import React from 'react'
import './App.css'

export default function Movie(props) {
    console.log(props)
    return (
    <div className="card">
        <h4 className="text-center">{props.name}</h4>
        <img src={props.imageUrl} alt={props.name}/>
        <p>Star Cast : {props.actor}</p>
    </div>
    )
}
