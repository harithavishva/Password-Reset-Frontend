import './style.css'
import { useNavigate } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';

export default function Home() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div id='card' className="container">
            <div className="d-flex flex-column align-items-center">

                {/* icon */}
                <div className="d-flex flex-column align-items-center" id="icon">
                    <IoHomeSharp />
                </div>

                {/* title & description */}
                <h2 className="fw-bold text-white">
                    Home
                </h2>
                <p className="text-white text-center">
                    You are Logged in to home page
                </p>
                <p className="text-white text-center">
                    Authentication token was sent and stored in localStorage
                </p>

                {/* submit buton */}
                <div className="d-flex justify-content-center pt-2">
                    <button onClick={logout} className="btn btn-light btn-sm text">
                        Logout
                    </button>
                </div>

            </div>
        </div>
    )
}