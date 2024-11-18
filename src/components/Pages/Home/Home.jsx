import React from "react";
import './Home.css'
import Carousel from "./Carousel";
import FeatureCollection from "./FeatureCollection";
import StorySection from "./Story";
const Home = () =>{
return(

   
    <div className="home-background">
      <Carousel/>
      <FeatureCollection/>
      <StorySection/>

    </div>
)
}
export default Home;

