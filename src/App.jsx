import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import { Box } from "@mantine/core";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box>
      <Header opened={opened} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
