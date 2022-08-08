import React, {useEffect, useState} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import { useParams } from 'react-router';


//import apiKey from '../config';

import Loading from '../img/loading.gif';

/**
 * Containers for the photos
 * Recieves the params from App.js and fetches
 * new data when route changes
 */
function PhotoContainer() {
    const { query } = useParams();
    const apiKey="_-o60X-Gr9XMLg3DYzN7khcFv7dcvsWeYwfH4O2yaak";
    const[isLoading,SetIsLoading]=useState(true);
    const[data,SetData]=useState([]);
    const[name,SetName]=useState('');
    //const[match,SetMatch]=useState(query);
    
    
    useEffect(() => {
        //SetMatch(query)
        handleSearch(query);
    }, [query]);

    function handleSearch(match) {
        
        console.log(match);
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${match}&per_page=24&client_id=${apiKey}`)
        .then(res => res.json())
        .then((data)=>{
            SetIsLoading(false);
            SetData(data.results);
            SetName(match);
           
        })
        .catch(err => {
            console.log('Something went wrong: ', err);
        });

       
        SetIsLoading(true);
    }
    return (
            <div className="photo-container">
                <h2>Results for: <span>{name}</span></h2>

                    {/* 
                    Checks the loading dat
                    If not: checks if api returns data
                    */}
                    { !isLoading ? (
                            data.length > 0 ? (
                                <ul>
                                    {data.map(photo => <Photo key={photo.id} data={photo}/>)}
                                </ul>
                            ) : (
                                <NotFound />
                            )
                    ) : (
                        <div>
                            <img src={Loading} alt="Loading..."/>
                        </div>
                    )
                    }
            </div>
        )
    }
export default PhotoContainer;