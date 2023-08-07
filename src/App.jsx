import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import { Box } from "@mantine/core";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Services from "./pages/services";
import Products from "./pages/Products";
import Career from "./pages/career";
import AllJobs from "./pages/career/AllJobs";
import ViewJob from "./pages/career/ViewJob";
import Apply from "./pages/career/Apply";
import Blogs from "./pages/blogs";
import ContactUs from "./pages/contactus";
import Portfolio from "./pages/portfolio";
import { useEffect } from "react";
import ViewProject from "./pages/portfolio/ViewProject";
import ViewBlog from "./pages/blogs/ViewBlog";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <Box>
      <Header opened={opened} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/project-detail" element={<ViewProject />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<ViewBlog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Career />}>
          <Route path="/careers" element={<AllJobs />} />
          <Route path="/careers/view-job" element={<ViewJob />} />
          <Route path="/careers/apply-job" element={<Apply />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
