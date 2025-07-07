import React from "react";
import './Industries1.css'
import InfoCard from "../../component/InfoCard";

function Industries1() {
    const data = {
  logo: "/industries-logo.png",
  title: "Lorem ipsum dolor sit amet, consectetur.",
  text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText: "Learn More",
  image: "/i-img1.png",
};

  return (
    <div className="Industries1-banner-img">
      <img src="/industries1-banner.png" alt="" srcset="" />
      <div>
      <InfoCard {...data} />
      <InfoCard {...data} />
      <InfoCard {...data} />
    </div>
    </div>
  );
}

export default Industries1;
