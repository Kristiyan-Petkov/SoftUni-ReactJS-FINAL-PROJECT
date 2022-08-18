import { Link, useNavigate, NavLink } from "react-router-dom";
import styles from "./HeaderArea.module.css"
// import { Navigate , createPath} from "react-router-dom";

export const HeaderArea = () => {
    const navigate = useNavigate();

    const logoClick = () => {
        navigate('/', {replace:"false"});
    }
    
    // const logoutClick = () => {
    //     navigate('/', {replace:"true"});
    // }

    const setStyle = ({isActive}) => {
        return isActive
        ? styles['active-link']
        : undefined
    }

    return (
        <header className="header-area">
            <section className="navigation">
                <p><img src="./logo.png" alt="Nivis Services" onClick={logoClick} /></p>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={setStyle}>HOME</NavLink></li>
                        {/* <li><NavLink to="/about" className={setStyle}>ABOUT</NavLink></li> */}
                        <li><NavLink to="/services" className={setStyle}>CATALOG</NavLink></li>
                        {/* <li><NavLink to="/contact" className={setStyle}>CONTACT</NavLink></li> */}
                        <li><NavLink to="/profile" className={setStyle}>YOUR PROFILE</NavLink></li>
                        <li><NavLink to="/login" className={setStyle}>LOGIN</NavLink></li>
                        <li><NavLink to="/register" className={setStyle}>REGISTER</NavLink></li>
                        <li><NavLink to="/logout" className={setStyle}>LOGOUT</NavLink></li>

                        <li>
                            <ul>
                                <li><a href="https://www.linkedin.com/company/nivis-services" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </section>
        </header >
    );
}