import Wrapper from "components/Wrapper/Wrapper";
import AboutMeCom from "components/AboutMe/AboutMe";
import React, { useEffect, useState } from "react";
import WorkExperience from "components/AboutMe/WorkExperience";
import Education from "components/AboutMe/Education";
import Skills from "components/AboutMe/Skills";
import Quote from "components/AboutMe/Quote";
import axios from "axios";
import { API_URL } from "helpers/Constant";

export default function AboutMe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/about`).then((res) => {
      setData(res.data);
    });
  }, [setData]);

  const { title, profile, desc, work_experience, education, skills, quote } =
    data;

  return (
    <Wrapper hasTitle title={title} hasFooter>
      <AboutMeCom image={profile} desc={desc} />
      <WorkExperience data={work_experience} />
      <Education data={education} />
      <Skills data={skills} />
      <Quote data={quote} />
    </Wrapper>
  );
}
