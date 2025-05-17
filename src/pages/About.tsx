import React from "react";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import Values from "../components/about/Values";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Story />
      <Values />
      <Team />
    </div>
  );
};

//new changes
export default About;
