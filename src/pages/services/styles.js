import { createStyles } from "@mantine/core";
import img from "../../assets/ser.jpg";
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
    [`@media (max-width: 800px)`]: {
      margin: "20px",
      gap: "10px",
      flexDirection: "column",
      "& > img": {
        display: "none",
      },
    },
  },
  stac: {
    [`@media (max-width: 800px)`]: {
      alignItems: "flex-start",
    },
  },
}));
