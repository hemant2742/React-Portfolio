import React, { useState, useEffect } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  let getDarkmode = () => {
    return JSON.parse(localStorage.getItem("darkmode"));
  };
  let [darkMode, setDarkMode] = useState(getDarkmode);
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>

        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/portfolio"} element={<Portfolio />} />
        </Routes>
      </Grid>
    </Box>
  );
}
