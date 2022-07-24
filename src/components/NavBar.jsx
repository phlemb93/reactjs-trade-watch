import { BiSearchAlt } from 'react-icons/bi'
import { FiRefreshCcw } from 'react-icons/fi'

const NavBar = ({ handleChange }) => {

    const handleClick = () => {
        window.location.reload(true);
    };

    return (
        <div className="navbar">
            <h3>Trade<span style={{color:'#73BEC3'}}>Watch</span></h3>

            <div className="right">
                <FiRefreshCcw onClick={ handleClick } className="refresh-icon" />
    
                <div className="search-box">
                    <BiSearchAlt className="search-icon" />
                    <input onChange={(e) => handleChange(e.target.value)} placeholder="Search..." />
                </div>
            </div>
        </div>

    )
}

export default NavBar;