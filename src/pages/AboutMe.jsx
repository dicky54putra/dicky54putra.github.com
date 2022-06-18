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
import CV from "components/organisms/AboutMe/CV";
export default function AboutMe() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get(`${API_URL}/about.json`).then((res) => {
      if (isMounted) setData(res.data);
    });

    return () => {
      isMounted = false;
    };
  }, [setData]);

  return (
    <Wrapper hasTitle title={data?.title} hasFooter>
      <Intro image={data?.profile} desc={data?.desc} />
      <WorkExperience data={data?.work_experience} />
      <Education data={data?.education} />
      <Skills data={data?.skills} />
      <Quote data={data?.quote} />
      <CV data={data} />
    </Wrapper>
  );
}
