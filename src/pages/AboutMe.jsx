import Wrapper from "components/moleculs/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "helpers/Constant";
import {
  Education,
  Quote,
  Skills,
  Intro,
  WorkExperience,
} from "components/organisms/AboutMe";
export default function AboutMe() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/about.json`).then((res) => {
      setData(res.data);
    });
  }, [setData]);

  return (
    <Wrapper hasTitle title={data?.title} hasFooter>
      <Intro image={data?.profile} desc={data?.desc} />
      <WorkExperience data={data?.work_experience} />
      <Education data={data?.education} />
      <Skills data={data?.skills} />
      <Quote data={data?.quote} />
    </Wrapper>
  );
}
