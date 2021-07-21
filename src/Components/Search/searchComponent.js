import React, { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import Services from '../../ApiEndPoints/AppServices';
//Mock Data
import Searchtype from '../../Mockdata/search_type_data.json';
import SearchResult from './searchResult';

function SearchComponent() {
    const [initsearch, setInitSearch] = useState("");

    {/* useEffect(() => {
        search();
    }, []);*/}
    //console.log(Searchtype);

    function handleChange(e) {        
        setInitSearch(e.target.value);
        //search();
    }
    

    async function search() {
        const searchstring = initsearch;

        const SearchRes = await Services.getSearchs(searchstring);
        if (SearchRes.status === 401) {
            console.log("Error 401");
        } else if (SearchRes.status >= 300) {
            console.log("Error 300");
            //   SearchRes.json().then(
            //     res => {
            //       ToastNotification("Searching failed: " + res.errorResponse ?.message, "error", -1);
            //     });
        } else {
            await SearchRes.json().then(searchRes => {
                console.log(searchRes);
                //setSearchResponse(searchRes);
            });
        }
        //setWaitingForSearch(false);
    }


    return (
        <>
            <form>
                <div className="input-group">
                    <select>
                        {
                            Searchtype.map((st, index) => {
                                return (<option key={st.i18nKey}>{st.label}</option>)
                            })
                        }
                    </select>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Search IMDb"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit">
                            <BsSearch />
                        </button>
                    </div>
                </div>
            </form>
            {
                initsearch !=="" ? <SearchResult /> : ""
            }
            
        </>
    )
}

export default SearchComponent;