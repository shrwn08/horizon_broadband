import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const User = ({name}) => {
    const navigate = useNavigate();

    const handleBackBtn = () => {
    navigate("/")
    }

    return(<div className="user-container">
    <div className="user-back">
            <h2 className="user-name">Hello! {name}</h2>
            <div className="back-btn" onClick={handleBackBtn}><FaArrowLeft /> Back</div>
            </div>
            <div className="design">
                <div className="center-box"></div>
                <div className="left-top-box"></div>
                <div className="left-bottom-box"></div>
                <div className="right-top-box"></div>
                <div className="right-bottom-box"></div>
            </div>
    </div>)
}

export default User;