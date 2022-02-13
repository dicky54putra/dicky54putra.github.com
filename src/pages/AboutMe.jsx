import Wrapper from "components/Wrapper";
import AboutMeCom from "components/AboutMe";
import React from "react";
import WorkExperience from "components/AboutMe/WorkExperience";
import Education from "components/AboutMe/Education";
import Skills from "components/AboutMe/Skills";
import Quote from "components/AboutMe/Quote";

export default function AboutMe() {
  return (
    <Wrapper hasTitle title="About Me" hasFooter>
      <AboutMeCom />
      <WorkExperience />
      <Education />
      <Skills />
      <Quote />
    </Wrapper>
  );
}
