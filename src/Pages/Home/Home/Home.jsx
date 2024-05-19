import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Call from "../Call/Call";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";

//import Recommend from "../Recommend/Recommend";


const Home = () => {
  
    return (
        <div>
        <Helmet><title>Bistro|Home</title> </Helmet>
          <Banner></Banner>
          <Category></Category>
          <BistroBoss></BistroBoss>
          <PopularMenu></PopularMenu>
         <Call></Call>
          <Featured></Featured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;