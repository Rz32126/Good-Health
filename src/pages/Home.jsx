import Extra from "../components/Extra";
import Header from "../components/Header";
import Review from "../components/Review";
import Popular from "./Popular";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Popular></Popular>
            <Extra></Extra>
            <Review></Review>
        </div>
    );
};

export default Home;