import Blog from "../components/Blog";
import Extra from "../components/Extra";
import Gallery from "../components/Gallery";
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
            <Gallery></Gallery>
            <Blog></Blog>
        </div>
    );
};

export default Home;