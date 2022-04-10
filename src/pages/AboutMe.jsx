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

  return (
    <Wrapper hasTitle title={data?.title} hasFooter>
      <AboutMeCom image={data?.profile} desc={data?.desc} />
      <WorkExperience data={data?.work_experience} />
      <Education data={data?.education} />
      <Skills data={data?.skills} />
      <Quote data={data?.quote} />
    </Wrapper>
  );
}
