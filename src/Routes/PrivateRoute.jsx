import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
      </div>
    }

    if(user){
        return children;
    }
    
    return <Navigate to={'/signIn'} />
};

export default PrivateRoute;