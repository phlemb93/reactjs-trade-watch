import { useNavigate } from 'react-router-dom'
import { ImSpinner6 } from 'react-icons/im'
import { useEffect } from 'react'


const NotFound = () => {

const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000)
    }, [])

    return (
        <div className="not-found">
            <h1>This Page Cannot Be Found</h1>
            <p>Redirecting to the homepage <ImSpinner6 className="spinner" /></p>
        </div>
    )
}

export default NotFound;