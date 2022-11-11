import React from 'react'
import SearchParamsHook from '../components/practice/SearchParamsHook';
import Navigate from '../components/practice/Navigate';
import { useParams } from 'react-router-dom'
import UseLocation from '../components/practice/UseLocation';
import ApiFetchData1 from './practice/ApiFetchData1';
import ApiPostData1 from './practice/ApiPostData1';
function Test() {   
    const { id } = useParams();
    return (
 
        <>
            <div className="container">
                <h3>Dynamic routing</h3>
                <p>This is test page id: { id }</p>
            </div>

            <div className="container">
                <SearchParamsHook/>
            </div>

            <div className="container">
                <Navigate/>
            </div>

            <div className="container">
                <UseLocation/>
            </div>

            <div className="container">
                <ApiPostData1/>
            </div>

            <div className="container">
                <ApiFetchData1/>
            </div>
        </>


    )
}

export default Test