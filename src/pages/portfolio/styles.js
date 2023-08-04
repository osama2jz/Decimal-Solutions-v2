import { createStyles } from "@mantine/core";
import img from "../../assets/portfolio.png";
import img2 from "../../assets/product.svg";
export const useStyles = createStyles((theme) => ({
  heading: {
    height: "350px",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    "& > *": { zIndex: 2 },
    ":after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
      top: 0,
      right: 0,
      backgroundColor: "rgb(0,0,0,0.5)",
    },
  },
  service: {
    display: "flex",
    margin: "100px",
    gap: "100px",
    paddingBottom: "50px",
    alignItems: "center",
    borderBottom: "1px solid rgb(0,0,0,0.2)",
    ":last-child": {
      border: "none",
    },
    [`@media (max-width: 1000px)`]: {
      margin: "20px",
      gap: "10px",
      flexDirection: "column",
      "& > img": {
        display: "none",
      },
    },
  },
  stac: {
    [`@media (max-width: 1000px)`]: {
      alignItems: "flex-start",
    },
  },
  projectView: {
    height: "350px",
    backgroundImage: `url(${img2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    "& > *": { zIndex: 2 },
    ":after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
      top: 0,
      right: 0,
      backgroundColor: "rgb(0,0,0,0.5)",
    },
  },
  date:{
    borderLeftStyle:"solid",
    borderLeftWidth:'3px',
    borderColor:theme.colors.purple,
    paddingLeft:"10px"
  }
}));
