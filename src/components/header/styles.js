import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, { opened }) => ({
  logo: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    color: "black",
    [`@media (max-width: 1100px)`]: {
      color: "black",
    },
    "&:hover": {
      cursor: "pointer",
      scale: "1.02",
      color: theme.colors.purple,
    },
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
    },
  },
  navigationBar: {
    [`@media (max-width: 1100px)`]: {
      flexDirection: "column",
      position: "absolute",
      top: "60px",
      padding: "50px 20px",
      color: "black !important",
      borderRadius: "10px",
      width: "100vw",
      right: 0,
      backgroundColor: "white",
      display: opened ? "flex" : "none",
      zIndex: 11,
      boxShadow: "0px 10px 10px rgb(0,0,0,0.2)",
    },
  },
}));
