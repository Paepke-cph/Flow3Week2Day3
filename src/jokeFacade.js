import loginFacade from './loginFacade';

function jokeFacade() {
    const fetchURL = "http://localhost:8080/jokeFetcher/api/jokes";

    const fetchJoke = async (callback,errorCallback) => {
        try {
            const response = await fetch(fetchURL, loginFacade.makeOptions("GET",true));
            const json = await response.json();
            callback(json);
        } catch (error) {
            errorCallback(error);
        }
    }

    return {
        fetchJoke,
    }
  }
  
  let returnVal =  jokeFacade()
  export default returnVal;
  