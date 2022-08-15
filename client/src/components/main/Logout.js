import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    navigate('/', {replace: "false"});
}

export default Logout;