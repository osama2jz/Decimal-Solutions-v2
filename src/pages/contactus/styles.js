import { createStyles } from "@mantine/core";
import img from "../../assets/contactus.jpg";
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
  details: {
    borderRightStyle: "solid",
    borderRightWidth: "10px",
    borderColor: theme.colors.purple,
    [`@media (max-width: 900px)`]: {
      border: "none",
    },
  },
  cont: {
    borderLeftStyle: "solid",
    borderLeftWidth: "4px",
    borderColor: theme.colors.purple,
  },
}));
