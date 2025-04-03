import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Certification from "./components/Certifications/Certification";
import WebDevelopment from "./components/Courses/Web Development/WebDevelopment";
import DataScience from "./components/Courses/Data Science/DataScience";
import ArtificialIntelligence from "./components/Courses/ArtificialInteligence";
import MachineLearning from "./components/Courses/MachineLearning";
import DigitalMarketing from "./components/Courses/DigitalMarketing";
import CloudComputing from "./components/Courses/CloudComputing";
import UiUx from "./components/Courses/UiUX ";
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
import LoginSignup from "./components/LoginSignup/LoginSignup";
import EnrollmentForm from "./components/Course Supporter/Course Details/EnrollmentForm";
import PaymentPage from "./components/Course Supporter/Course Details/PaymentPage";
import SuccessPage from "./components/Course Supporter/Course Details/PaymentSuccess";
import PaymentFailure from "./components/Course Supporter/Course Details/PaymentFailure";
import TermsAndCondition from "./components/Privacy & Conditions/TermsAndCondition";
import VLSI from "./components/Courses/VLSI";
import PrivacyPolicy from "./components/Privacy & Conditions/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import WhatsAppButton from "./components/Whatsapp Support/WhatsAppButton";
function App() {
  return (
    <Router>
      <AppBar />
      <ScrollToTop />
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
        <Route path="/Courses/vlsi" element={<VLSI />} />
        <Route
          path="/Courses/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/Courses/cloud-computing" element={<CloudComputing />} />
        <Route path="/Courses/ui-ux" element={<UiUx />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/courses/:courseName/enroll"
          element={<EnrollmentForm />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/terms_and_Condition" element={<TermsAndCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <WhatsAppButton /> */}
      <Footer />
    </Router>
  );
}

export default App;
