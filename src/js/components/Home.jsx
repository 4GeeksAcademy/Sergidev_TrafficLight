import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100">
            <TrafficLight />
        </div>
	);
};

export default Home;