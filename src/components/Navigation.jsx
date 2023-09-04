import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className="navigation">
            <button onClick={()=>navigate("/")}>Cube</button>
            <button onClick={()=>navigate("/model")}>Model</button>
            <button onClick={()=>navigate("/sphere")}>Sphere</button>
        </div>
    )
}

export default Navigation;