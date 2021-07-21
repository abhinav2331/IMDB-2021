import React from 'react';
import './search.css';
import { BiPlayCircle } from "react-icons/bi";
import Searchdata from '../../Mockdata/lion_search_data.json';

function SearchResult() {

    return (
        <>
            <div className="result">
                <ul>
                    {
                        Searchdata.map((item) => {
                            return (

                                item.template === "const" ? <li key={item.value}>
                                    <div className="result_img_small">
                                        <img src={item.image.url} alt={item.image.caption} />
                                    </div>
                                    <div className="search_info">
                                        <div>{item.label}</div>
                                        <div>{item.year}</div>
                                        <div>{item.subLabel}</div>
                                    </div>
                                </li> : <li className="col-lg-6 float-left">
                                    <div className="lgvideo">
                                        <img src={item.image.url} alt={item.image.caption} />
                                        <div className="dedc"><BiPlayCircle style={{color:"green"}} /> {item.subLabel}</div>
                                    </div>
                                    <div>{item.label}</div>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default SearchResult;