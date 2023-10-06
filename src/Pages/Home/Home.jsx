import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            Home: {user}
        </div>
    );
};

export default Home;