import React from 'react'

export default function Navbar(props) {
    return (
       <div className="navbar">
           
                  <a href="#">Search Movie</a>
              
                    <input className="m-1 p-0" type="text" onInput={props.onMovieEntered} />
              
                   <button className="btn btn-success" onClick={props.onSearch}>Search</button>
              
       </div>
    )
}
