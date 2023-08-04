import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { backendUrl } from "../constants";

export const Context = createContext({});
const AboutUsProvider = (props) => {
  const [aboutUs, setAboutUs] = useState(
    JSON.parse(localStorage.getItem("aboutUs"))
  );

  const getMyData = () => {
    axios
      .get(backendUrl + "/api/v1/web/contactUs")
      .then((res) => {
        setAboutUs(res.data?.data[0]);
        localStorage.setItem("aboutUs", JSON.stringify(res.data?.data[0]));
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMyData();
  }, []);

  const values = {
    aboutUs,
    setAboutUs,
  };
  return (
    <Context.Provider value={values}>{props.children}</Context.Provider>
  );
};

export default AboutUsProvider;
