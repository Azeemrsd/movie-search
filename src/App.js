import './App.css';
import axios from 'axios'
import { useState } from 'react'
import Movie from './Movie'
import Navbar from './Navbar';
function App() {
  const [movies,setMovies] = useState([]);
  const [movieInput,setMovieInput] = useState('')

  const callMovieAPI = () =>{
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: movieInput},
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_SECRET_KEY,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data['d']);
      setMovies(response.data['d'])
      setMovieInput('')      
    }).catch(function (error) {
      console.error(error);
    });
  }

  const storeData = (text) =>{
    const { value } = text.target;
    setMovieInput(value)
  }
  return (
    <div className="">
       <Navbar onMovieEntered={storeData} onSearch={callMovieAPI} />
      <div className="grid-4">
      {
     movies.map((movie,index)=>{
      return <Movie key={index} imageUrl={movie?.i?.imageUrl} name={movie?.l} actor={movie.s}/>
    })
  }
  </div>
    </div>
  );
}

export default App;
