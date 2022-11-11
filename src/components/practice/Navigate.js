import { useNavigate } from 'react-router-dom'

function Naviagte() {
    const navigate = useNavigate();
    const navToPage= (url)=> {
        navigate(url)
    }
    return (
        <>

            <button onClick={()=>navToPage('/work')} >Go to Work Page</button>

        </>
    )
}
export default Naviagte