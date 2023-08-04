import { createStyles } from "@mantine/core";
import img from "../../assets/achievements.jpg";
import img2 from "../../assets/Testimonial.jpg";
export const useStyles = createStyles((theme) => ({
  services: {
    padding: "100px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  serviceCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.purple,
    borderWidth: "2px",
    width: "250px",
    height: "250px",
    borderStyle: "solid",
    padding: "20px",
    borderRadius: "10px",
    gap: "10px",
    marginLeft: "50px",
    cursor: "pointer",
    [`@media (max-width: 1000px)`]: {
    marginLeft: "30px",
    },
  },
  achievement: {
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
  ach: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    // padding: "30px",
    gap: "10px",
    height: "280px",
    width: "280px",
    "& > img": {
      width: "70px",
    },
    ":before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "40%",
      top: 0,
      left: 0,
      border: "2px solid white",
      zIndex: 10,
      borderBottom: "none",
    },
    ":after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "40%",
      bottom: 0,
      left: 0,
      border: "2px solid white",
      zIndex: 10,
      borderTop: "none",
    },
  },
  whyUsSub: {
    display: "flex",
    flexDirection: "row",
  },
  whyUs: {
    padding: "0px 100px 100px 100px",
    [`@media (max-width: 1280px)`]: {
      padding: "20px",
    },
  },
  whywhy: {
    border: "1px solid rgb(0,0,0,0.1)",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 10px 10px rgb(0,0,0,0.1)",
    position: "absolute",
    ":nth-child(1)": {
      top: "12%",
    },
    ":nth-child(2)": {
      top: "33%",
      left: "5%",
    },
    ":nth-child(3)": {
      top: "54%",
      left: "5%",
    },
    ":nth-child(4)": {
      top: "75%",
    },
    [`@media (max-width: 1150px)`]: {
      position: "static",
      marginBlock: "20px",
    },
  },
  toolsTech: {
    padding: "0px 100px 100px 100px",
    [`@media (max-width: 1280px)`]: {
      padding: "20px",
    },
  },
  test: {
    backgroundImage: `url(${img2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "570px",
    marginBottom: "50px",
    [`@media (max-width: 1000px)`]: {
      backgroundSize: "fill",
      backgroundPosition:'center'
    },
  },
  testSub: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    gap: "5px",
    maxWidth: "70%",
    margin: "auto",
    marginTop: "30px",
    paddingBottom: "50px",
  },
}));
