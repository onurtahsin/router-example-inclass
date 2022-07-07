import { useNavigate } from 'react-router-dom';
import errorImg from '../img/404.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div className="mt-4">
      <div>
            <button onClick={() => navigate('/')} className="btn btn-danger me-2">
              Home
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-warning">
              Go Back
            </button>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
