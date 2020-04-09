import React, { useState, useEffect } from 'react'

const Scrape = ({scrapeFacade,isUserAdmin}) => {
    const [scrapes, setScrapes] = useState([]);
    useEffect(() => {
        if(isUserAdmin())
            scrapeFacade.fetchScrape(setScrapes);
    },[])

    if(isUserAdmin()) {
        return(
            <div>
                <h1>Scrape</h1>
                {scrapes.map(({url,title,divCount,bodyCount},index) => {
                    return(
                        <ul key={index}>
                            <li>{title}</li>
                            <li>URL: {url}</li>
                            <li>Div Count: {divCount}</li>
                            <li>Body Count: {bodyCount}</li>
                        </ul>
                    );
                })}
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

export default Scrape;