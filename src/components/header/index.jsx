import {
  Box,
  Burger,
  Flex,
  Group,
  Text,
  useMantineTheme,
  Anchor,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone } from "tabler-icons-react";
import fb from "../../assets/facebook.svg";
import ig from "../../assets/instagram.svg";
import lk from "../../assets/linkedin.svg";
import logo from "../../assets/logo.svg";
import yt from "../../assets/youtube.svg";
import { useStyles } from "./styles";
import { Context } from "../../context/context";

const Header = ({ opened, toggle }) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { classes } = useStyles({ opened });
  const { aboutUs: data } = useContext(Context);
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
            <Text>{data?.primaryContact}</Text>
          </Group>
          <Group spacing={"xs"}>
            <Mail color={theme.colors.purple} />
            <Anchor href={`mailto:${data?.primaryEmail}`}>
              {data?.primaryEmail}
            </Anchor>
          </Group>
        </Flex>
        <Flex gap={"lg"} align={"center"}>
          <Anchor className={classes.icon} href={data?.facebook} target="_blank">
            <img src={fb} width={"30px"} />
          </Anchor>
          <Anchor
            className={classes.icon}
            href={data?.instagram}
            target="_blank"
          >
            <img src={ig} width={"30px"} />
          </Anchor>
          <Anchor className={classes.icon} href={data?.youtube} target="_blank">
            <img src={yt} width={"30px"} />
          </Anchor>
          <Anchor className={classes.icon} href={data?.linkedIn} target="_blank">
            <img src={lk} width={"30px"} className={classes.icon} />
          </Anchor>
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
