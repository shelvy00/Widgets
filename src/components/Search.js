import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {

    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([])

    useEffect(() => {
       const timerid = setTimeout(() => {
         setDebouncedTerm(term);
       }, 1000);

       return () => {
           clearTimeout(timerid);
       };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            //https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=srsearch=term 
         const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
              params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: debouncedTerm,  
              },
             });
 
             setResults(data.query.search);
         };
         search()
    }, [debouncedTerm]);


    /*useEffect(() => {
        const search = async () => {
           //https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=srsearch=term 
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
             params: {
               action: "query",
               list: "search",
               origin: "*",
               format: "json",
               srsearch: term,  
             },
            });

            setResults(data.query.search);
        };

        if (term && !results.length) {
          search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search()
                  }
            }, 1000); 
    
            return () => {
              clearTimeout(timeoutId); // Cleanup function
            };
        }
    }, [term, results.length]);*/

    const renderedResults = results.map((result) => {
      return (
          <div key={result.pageid} className="item">
            <div className="content">
                <div className="right floated content">
                  <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
               <div className="header">
                  {result.title}
               </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
            </div>
          </div>
        );  
    });

    return (
      <div>
          <div className="ui form">
            <div className="field">
              <label>Enter Search Term</label>
              <input value={term} className="input" onChange={(e) => setTerm(e.target.value)} />
            </div>
          </div>
          <div className="ui celled list">
             {renderedResults}
          </div>
      </div>
    );
}

export default Search;