import loginFacade from './loginFacade';

function scrapeFacade() {
    const fetchURL = "http://localhost:8080/jokeFetcher/api/scrape";
    
    const fetchScrape = async (callback,errorCallback) => {
        try {
            const response = await fetch(fetchURL, loginFacade.makeOptions("GET",true));
            const json = await response.json();
            callback(json);
        } catch (error) {
            errorCallback(error);
        }
    }

    return {
        fetchScrape,
    }
  }
  
  let returnVal =  scrapeFacade()
  export default returnVal;
  