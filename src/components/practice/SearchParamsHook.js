import { useSearchParams } from "react-router-dom";

function SearchParamsHook() {
    const [searchParams, setSearchParams] = useSearchParams();

    const age = searchParams.get('age');
    const year = searchParams.get('year');
    return (
        <>
            <div className="container">
                <p>Age is: { age }</p>
                <p>Year is: { year }</p>
                <button className="btn btn-primary" onClick={(e)=>setSearchParams({age:4,year:2018})}>Set Age</button>
                {/* <button className="btn btn-primary" onClick={(e)=>setSearchParams({year:2019})}>Set Year</button> */}
            </div>


        </>
    )
}
export default SearchParamsHook