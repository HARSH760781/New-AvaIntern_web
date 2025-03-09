import React, { useState, useEffect } from "react";
import "./Enrollment.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define courseDetails object outside the component
const courseDetails = {
  "web-development": {
    description:
      "Master both frontend & backend technologies with hands-on projects.",
    image: "/images/Courses/Full Stack poster.png",
    price: "Rs 11999",
  },
  "data-science": {
    description: "Learn data analysis, machine learning, and AI techniques.",
    image: "/images/Courses/Data Science poster.png",
    price: "Rs 11999",
  },
  "cyber-security": {
    description:
      "Understand network security, ethical hacking, and cryptography.",
    image: "/images/Courses/Cyber Security.png",
    price: "Rs 11999",
  },
  "ui-ux": {
    description: "Gain skills in user interface & experience design.",
    image: "/images/Courses/UiUx.png",
    price: "Rs 11999",
  },
  "machine-learning": {
    description: "Master ML concepts, algorithms, and real-world applications.",
    image: "/images/Courses/machine Learning.png",
    price: "Rs 11999",
  },
  "artificial-intelligence": {
    description:
      "Explore deep learning, neural networks, and AI-powered applications.",
    image: "/images/Courses/Artificial INGELLIGENCE.png",
    price: "Rs 11999",
  },
  "cloud-computing": {
    description:
      "Understand AWS, Azure, and Google Cloud for scalable applications.",
    image: "/images/Courses/cloud.png",
    price: "Rs 11999",
  },
  "software-testing": {
    description:
      "Learn manual & automation testing with Selenium, JUnit, and more.",
    image: "/images/Courses/software testing.png",
    price: "Rs 11999",
  },
  "app-development": {
    description:
      "Develop Android & iOS applications using Flutter and React Native.",
    image: "/images/Courses/App Development.png",
    price: "Rs 11999",
  },
  devops: {
    description:
      "Implement CI/CD pipelines, Docker, Kubernetes, and cloud automation.",
    image: "/images/Courses/devops.png",
    price: "Rs 11999",
  },
  iot: {
    description:
      "Build smart IoT applications and connect devices with cloud services.",
    image: "/images/Courses/iot .png",
    price: "Rs 11999",
  },
  "digital-marketing": {
    description:
      "Master SEO, social media marketing, and performance advertising.",
    image: "/images/Courses/DIGITAL MARKETING.png",
    price: "Rs 11999",
  },
  hr: {
    description:
      "Develop skills in recruitment, employee management, and labor laws.",
    image: "/images/Courses/HR.png",
    price: "Rs 11999",
  },
  "embedded-systems": {
    description:
      "Learn microcontrollers, real-time operating systems, and embedded C programming.",
    image: "/images/Courses/Embedded Systems.png",
    price: "Rs 11999",
  },
  vlsi: {
    description:
      "Explore Very Large Scale Integration (VLSI) for chip design and hardware development.",
    image: "/images/Courses/VLSI .png",
    price: "Rs 11999",
  },
  autocad: {
    description:
      "Master CAD software for 2D & 3D design in engineering and architecture.",
    image: "/images/Courses/autocad .png",
    price: "Rs 11999",
  },
  "business-analytics": {
    description:
      "Use data-driven insights to make strategic business decisions.",
    image: "/images/Courses/Business Analytics.png",
    price: "Rs 11999",
  },
};

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interestDomain: "",
    price: "",
  });

  const [errors, setErrors] = useState({}); // State to track validation errors
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.pathname.replace("/enroll", "");
  const courseName = previousPath.split("/").pop().replace(/-/g, " ");

  // Initialize the interestDomain with the courseName when the component mounts
  useEffect(() => {
    const formattedCourseName = courseName.toLowerCase().replace(/\s+/g, "-");
    const selectedPrice =
      courseDetails[formattedCourseName]?.price || "Not Available";

    setFormData((prevData) => ({
      ...prevData,
      interestDomain: courseName, // Set default value for interestDomain
      price: selectedPrice, // Set default price
    }));
  }, [courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "interestDomain") {
      const selectedCourseKey = value.toLowerCase().replace(/\s+/g, "-");
      const selectedPrice =
        courseDetails[selectedCourseKey]?.price || "Not Available";
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        price: selectedPrice,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      newErrors.mobile = "Mobile number must be 10 digits";
    if (!formData.interestDomain.trim())
      newErrors.interestDomain = "Interest domain is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors in state
      toast.error("Please fix the errors in the form.", {
        background: "white",
      });
      return;
    }

    setLoading(true);

    const url = import.meta.env.VITE_SHEETDB_URL;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.email,
              Mobile: formData.mobile,
              "Interest Domain": formData.interestDomain,
              Price: formData.price,
              TimeStamp: new Date().toISOString().split("T")[0],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (result.created > 0) {
        toast.success("Redirecting to the payment...", {
          autoClose: 2000,
          style: { background: "white", color: "black" },
          onClose: () =>
            navigate("/payment", {
              state: {
                amount: formData.price,
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                courseName: formData.interestDomain,
              },
            }),
        });
      } else {
        throw new Error("Failed to create record in the database.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Failed to submit form: ${error.message}`, {
        autoClose: 3000,
        style: { background: "white", color: "black" },
      });
    } finally {
      setLoading(false);
    }
  };

  const formattedCourseName = courseName.toLowerCase().replace(/\s+/g, "-");
  const coursePrice =
    courseDetails[formattedCourseName]?.price || "Not Available";
  const course = courseDetails[formattedCourseName] || {
    description: "Get hands-on experience and industry-relevant skills.",
    image: "/images/Courses/default-course.jpg",
  };

  return (
    <div className="enrollment-form">
      {/* Left Section (Course Info + FAQ) */}
      <div className="left-section">
        {/* Course Info Section */}
        <div className="course-info">
          <Typography className="title" variant="h4" gutterBottom>
            Why Enroll in {courseName}?
          </Typography>
          <img
            src={course.image}
            alt={courseName}
            className="course-image"
            style={{ width: "100%" }}
          />
          <Typography variant="body1">{course.description}</Typography>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            Price: {course.price}
          </Typography>
        </div>

        {/* FAQ Section */}
        <div className="enrollment-faq">
          <Typography variant="h4" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">What is the course duration?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-answer">
                The course duration varies depending on the program. Most
                courses range from 8 to 12 weeks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Is there a certification?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-answer">
                Yes, you will receive a certification upon successful completion
                of the course.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Can I pay in installments?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-answer">
                Yes, we offer flexible payment options, including installment
                plans.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">What if I miss a class?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-answer">
                All classes are recorded, so you can access them at any time.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="form-container">
        <h2>Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{ mb: 2 }}
            error={!!errors.name}
            helperText={errors.name}
            inputProps={{ "aria-label": "Enter your name" }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{ mb: 2 }}
            error={!!errors.email}
            helperText={errors.email}
            inputProps={{ "aria-label": "Enter your email" }}
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            type="number"
            value={formData.mobile}
            onChange={handleChange}
            required
            disabled={loading}
            sx={{ mb: 2 }}
            error={!!errors.mobile}
            helperText={errors.mobile}
            inputProps={{ "aria-label": "Enter your mobile number" }}
          />
          <FormControl
            fullWidth
            sx={{
              mb: 2,
              position: "relative",
            }}
          >
            <InputLabel
              shrink
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                fontSize: "0.875rem",
                color: "#1976d2",
                zIndex: 1,
                backgroundColor: "white",
                paddingLeft: "8px",
                transition: "all 0.3s ease",
              }}
            >
              Interest Domain
            </InputLabel>
            <Select
              name="interestDomain"
              value={formData.interestDomain || courseName}
              onChange={handleChange}
              required
              error={!!errors.interestDomain}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "#ccc",
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1976d2",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2",
                  },
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderTop: "none",
                },
              }}
            >
              <MenuItem value={courseName} defaultValue={courseName}>
                {courseName}
              </MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
            {errors.interestDomain && (
              <Typography color="error" variant="caption">
                {errors.interestDomain}
              </Typography>
            )}
          </FormControl>

          <TextField
            fullWidth
            label="Course Price"
            name="price"
            value={course.price}
            InputProps={{
              readOnly: true,
              sx: {
                backgroundColor: "#f5f5f5",
                color: "#888",
                borderRadius: 1,
              },
            }}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ backgroundColor: loading ? "red " : "#1976d2" }}
          >
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EnrollmentForm;
