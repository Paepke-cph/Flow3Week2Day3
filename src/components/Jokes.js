import React, { useState, useEffect } from 'react'

const Jokes = ({jokeFacade, isUserAdmin, isUserRegular}) => {
    const [jokes, setJokes] = useState([]);
    
    useEffect(() => {
        jokeFacade.fetchJoke(setJokes,console.log)
    },[]);

    if(isUserAdmin() || isUserRegular()) {
        return(
            <div>
                <h1>Jokes</h1>
                <ul>
                    <li><strong>Chuck Norris Joke:</strong> {jokes.joke1}</li>
                    <li><strong>Reference:</strong> {jokes.joke1Reference}</li>
                    <li><strong>Dad Joke:</strong> {jokes.joke2}</li>
                    <li><strong>Reference:</strong> {jokes.joke2Reference}</li>
                </ul>
            </div>
        );
    } else {
        return(
            <div>
                <h1>Access Denied</h1>
            </div>
        );  
    }
};

export default Jokes;