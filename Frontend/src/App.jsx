import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import Banner from "./components/Banner/Banner";
import Sponser from "./components/Sponser/Sponser";
import Provide from "./components/Provide/Provide";
import Home from "./components/Test/Achievements";
import Testimonial from "./components/Feedback/Testimonial";
import Footer from "./components/Footer/Footer";
import StatsCardContainer from "./components/Counter/StatsCardContainer";
import ExplorePrograms from "./components/Explore Program/ExplorePrograms";
import About from "./components/About/About";
import Certification from "./components/Certifications/Certification";
import axios from "axios";
import WebDevelopment from "./components/Courses/Web Development/WebDevelopment";
import DataScience from "./components/Courses/Data Science/DataScience";
import ArtificialIntelligence from "./components/Courses/ArtificialInteligence";
import MachineLearning from "./components/Courses/MachineLearning";
import DigitalMarketing from "./components/Courses/DigitalMarketing";
import CloudComputing from "./components/Courses/CloudComputing";
import UIUX from "./components/Courses/UIUX";
import CareerPage from "./components/Career/CareerPage";
import ContactUs from "./components/ContactUs/ContactUs";
import AutoCad from "./components/Courses/AutoCad";
import Embedded from "./components/Courses/Embedded";
import DataAnalytics from "./components/Courses/DataAnalytics";
import CourseComponent from "./components/Courses/Course/CourseComponent";
import AppDevelopment from "./components/Courses/AppDevelopment";
import CyberSecurity from "./components/Courses/CyberSecurity";
import IoT from "./components/Courses/IoT";
import HR from "./components/Courses/HR";
import Business from "./components/Courses/BusinessAnalytics";
import DevOps from "./components/Courses/Devops";
import SoftwareTesting from "./components/Courses/SoftwareTesting";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/SignUp";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import EnrollmentForm from "./components/Course Supporter/Course Details/EnrollmentForm";
import PaymentPage from "./components/Course Supporter/Course Details/PaymentPage";
import PaymentSuccess from "./components/Course Supporter/Course Details/PaymentSuccess";
import SuccessPage from "./components/Course Supporter/Course Details/PaymentSuccess";
import PaymentFailure from "./components/Course Supporter/Course Details/PaymentFailure";
// import Blockchain from "./components/Courses/Blockchain";

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Courses" element={<CourseComponent />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/Courses/web-development" element={<WebDevelopment />} />
        <Route path="/Courses/cyber-security" element={<CyberSecurity />} />
        <Route path="/Courses/app-development" element={<AppDevelopment />} />
        <Route path="/Courses/data-science" element={<DataScience />} />
        <Route path="/Courses/ai" element={<ArtificialIntelligence />} />
        <Route path="/Courses/embedded-system" element={<Embedded />} />
        <Route path="/Courses/data-analytics" element={<DataAnalytics />} />
        <Route path="/Courses/hr" element={<HR />} />
        <Route path="/Courses/iot" element={<IoT />} />
        <Route path="/Courses/autoCAD" element={<AutoCad />} />
        <Route path="/Courses/machine-learning" element={<MachineLearning />} />
        <Route path="/Courses/business-analytics" element={<Business />} />
        <Route path="/Courses/devops" element={<DevOps />} />
        <Route path="/Courses/software-testing" element={<SoftwareTesting />} />
        <Route
          path="/Courses/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/Courses/cloud-computing" element={<CloudComputing />} />
        <Route path="/Courses/ui-ux" element={<UIUX />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/courses/:courseName/enroll"
          element={<EnrollmentForm />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />

        {/* You can add more routes here for other sections */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
