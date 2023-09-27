import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className="navigation">
            <button onClick={()=>navigate("/")}>Cube</button>
            <button onClick={()=>navigate("/model")}>Model</button>
            <button onClick={()=>navigate("/sphere")}>Sphere</button>
            <button onClick={()=>navigate("/tile")}>Tile</button>
        </div>
    )
}

export default Navigation;