import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            Home: {user && user.email}
        </div>
    );
};

export default Home;