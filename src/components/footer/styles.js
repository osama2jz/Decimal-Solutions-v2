import { createStyles } from "@mantine/core";
import img from "../../assets/footer.jpg";
export const useStyles = createStyles((theme) => ({
  footer: {
    padding: "50px",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    fontSize: "22px",
    "& > *": {
      zIndex: 99,
      position: "relative",
    },
    ":after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
      top: 0,
      right: 0,
      backgroundColor: "rgb(148, 31, 126, 0.9)",
    },
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
    },
  },
}));
