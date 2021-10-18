import React, { useEffect,useState } from 'react'
import './Rowpost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)

        }).catch(err=>{
            
        })
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>

                <img className={props.isSmall ? 'smallposter': 'Poster'}alt="poster" src={`${imageUrl+obj.backdrop_path}`} />

                )}
                
            </div>
        </div>
    )
}

export default Rowpost
