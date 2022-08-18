import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    console.log('logging out...');
    return(navigate('/', {replace: "false"}))
}

export default Logout;