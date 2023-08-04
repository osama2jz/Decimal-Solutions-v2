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
  img: {
    // backgroundColor:'red',
    maxWidth: "300px",
    margin: "auto",
    [`@media (max-width: 1200px)`]: {
      ":last-child": {
        transform: 'rotate(90deg)',
      },
    },
  },
  job: {
    display: "flex",
    alignItems: "flex-end",
    borderBottom: "1px solid rgb(0,0,0,0.1)",
    padding: "10px",
    width: "100%",
    justifyContent: "space-between",
    ":last-child": {
      border: "none",
    },
    [`@media (max-width: 800px)`]: {
      flexDirection: "column",
      width: "90%",
      alignItems: "flex-start",
    },
  },
}));
