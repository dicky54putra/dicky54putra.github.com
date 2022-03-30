import axios from "axios";
import PortfolioContent from "components/Portfolio/Portfolio";
import Wrapper from "components/Wrapper/Wrapper";
import { API_URL } from "helpers/Constant";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/portfolio`).then((res) => {
      setData(res.data);
    });
  }, [setData]);

  return (
    <Wrapper hasTitle title={data?.title} hasFooter>
      <PortfolioContent data={data?.project} />
    </Wrapper>
  );
}
