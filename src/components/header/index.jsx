import { Box, Burger, Flex, Group, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone } from "tabler-icons-react";
import fb from "../../assets/facebook.svg";
import ig from "../../assets/instagram.svg";
import lk from "../../assets/linkedin.svg";
import logo from "../../assets/logo.svg";
import yt from "../../assets/youtube.svg";
import { backendUrl } from "../../constants";
import { useStyles } from "./styles";

const Header = ({ opened, toggle }) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { classes } = useStyles({ opened });
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/category/get_all")
      .then((res) => setCat(res.data.data));
  }, []);
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderBottom: "3px dashed rgb(0,0,0,0.1)",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          paddingBlock: isMobile ? "10px" : "10px",
        }}
      >
        <Flex
          align={"center"}
          gap={isMobile ? "xs" : "md"}
          direction={isMobile ? "column" : "row"}
        >
          <Group spacing={"xs"}>
            <Phone color={theme.colors.purple} />
            <Text>+92 345 5893337</Text>
          </Group>
          <Group spacing={"xs"}>
            <Mail color={theme.colors.purple} />
            <Text>info@decimalsolution.com</Text>
          </Group>
        </Flex>
        <Flex gap={"lg"} align={"center"}>
          <img src={fb} width={"30px"} className={classes.icon} />
          <img src={ig} width={"30px"} className={classes.icon} />
          <img src={yt} width={"30px"} className={classes.icon} />
          <img src={lk} width={"30px"} className={classes.icon} />
        </Flex>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBlock: isMobile ? "10px" : "10px",
          position: "sticky",
          backgroundColor: "white",
          zIndex: 1000,
          top: 0,
          boxShadow: "0px 5px 5px rgb(0,0,0,0.1)",
        }}
      >
        <Flex
          align={"center"}
          className={classes.logo}
          onClick={() => navigate("/")}
        >
          <img src={logo} width={120} />
        </Flex>
        <Flex gap={"lg"} align={"center"} className={classes.navigationBar}>
          <Link
            className={classes.link}
            to="/"
            onClick={() => isMobile && toggle()}
          >
            Home
          </Link>
          <Link
            className={classes.link}
            to="/about-us"
            onClick={() => isMobile && toggle()}
          >
            About Us
          </Link>
          <Link
            className={classes.link}
            to="/services"
            onClick={() => isMobile && toggle()}
          >
            Services
          </Link>
          <Link
            className={classes.link}
            to="/portfolio"
            onClick={() => isMobile && toggle()}
          >
            Portfolio
          </Link>
          <Link
            className={classes.link}
            to="/products"
            onClick={() => isMobile && toggle()}
          >
            Our Products
          </Link>
          <Link
            className={classes.link}
            to="/careers"
            onClick={() => isMobile && toggle()}
          >
            Careers
          </Link>

          <Link
            className={classes.link}
            to="/blogs"
            onClick={() => isMobile && toggle()}
          >
            Blogs
          </Link>
          <Link
            className={classes.link}
            to="/contact-us"
            onClick={() => isMobile && toggle()}
          >
            Contact Us
          </Link>
        </Flex>

        {isMobile && <Burger opened={opened} onClick={toggle} color="black" />}
      </Box>
    </>
  );
};
export default Header;
