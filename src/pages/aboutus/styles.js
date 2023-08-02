import { createStyles } from "@mantine/core";
import img from "../../assets/aboutt.jpg";
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
  sub: {
    padding: "100px 120px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  perform: {
    backgroundColor: "#f8fafc",
    padding:"20px"
  },
}));
