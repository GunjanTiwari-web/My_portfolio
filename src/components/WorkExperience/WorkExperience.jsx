
import "./WorkExperience.css";
import React, { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExpCard from "./ExpCard/ExpCard";
import Slider from "react-slick";

const WorkExperience = () => {
 const sliderRef = useRef();
  const setting = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:true,
    responsive: [
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  };
  return (
    <section className="experience-container">
      <h5>Projects</h5>
      
      <div className="experience-content"> 
        <div className="arrow-right">
          <span class="material-symbols-outlined"></span>
        </div>

        <div className="arrow-left">
          <span class="material-symbols-outlined"></span>
        </div>
        
       <Slider ref={sliderRef} {...setting}>
        {WORK_EXPERIENCE.map((item) => (
          <ExpCard key={item.title} details ={item}/>
        ))}
         </Slider> 
      </div>
    </section>
  );
};

export default WorkExperience;
