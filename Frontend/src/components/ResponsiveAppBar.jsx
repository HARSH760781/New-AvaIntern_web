import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "#" },
  { name: "Our LMS", path: "https://avainternlms.in", target: "_blank" }, // Add target="_blank"
  { name: "Certification", path: "/certification" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const courses = [
  { name: "Full Stack ", path: "/courses/web-development" },
  { name: "Data Science", path: "/courses/data-science" },
  { name: "Artificial Intelligence", path: "/courses/ai" },
  { name: "Machine Learning", path: "/courses/machine-learning" },
  { name: "Digital Marketing", path: "/courses/digital-marketing" },
  { name: "Cloud Computing", path: "/courses/cloud-computing" },
  { name: "Data Analytics", path: "/courses/data-analytics" },
  { name: "UI/UX", path: "/courses/ui-ux" },
  { name: "VLSI", path: "/courses/vlsi" },
  { name: "Software Testing", path: "/courses/software-testing" },
  { name: "AutoCAD", path: "/courses/autoCAD" },
  { name: "Embedded System", path: "/courses/embedded-system" },
  { name: "Cybersecurity", path: "/courses/cyber-security" },
  { name: "App Development", path: "/courses/app-development" },
  { name: "Internet of Things", path: "/courses/iot" },
  { name: "Business Analytics", path: "/courses/business-analytics" },
  { name: "Devops", path: "/courses/devops" },
  { name: "HR Management", path: "/courses/hr" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCourses, setAnchorElCourses] = React.useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenCoursesMenu = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileCoursesOpen(false);
  };

  const handleCloseCoursesMenu = () => {
    setAnchorElCourses(null);
  };

  const toggleMobileCourses = () => {
    setMobileCoursesOpen(!mobileCoursesOpen);
  };

  const open = Boolean(anchorElCourses);
  const id = open ? "courses-popper" : undefined;

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (anchorElCourses && !anchorElCourses.contains(event.target)) {
        handleCloseCoursesMenu();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, anchorElCourses]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "blue",
        boxShadow: "none",
        "& .MuiTypography-root": {
          fontWeight: "bold",
          background: "blue",
        },
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Mobile Menu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "5px !important",
            }}
          >
            <Link
              to="/"
              style={{
                display: "flex", // Align the logo and text horizontally
                alignItems: "center", // Vertically center the text with the logo
                textDecoration: "none", // Remove underline from the link
                gap: "5px", // Remove any gap between the logo and text
                width: "auto",
              }}
            >
              <img
                src="/images/logo.jpg"
                alt="Home"
                style={{
                  height: "30px", // Set a fixed height for the logo
                  transition: "transform 0.2s", // Smooth scale transition
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <span
                style={{
                  fontSize: "1rem", // Default larger font size for the text
                  fontWeight: "bold", // Make the text bold
                  color: "black", // Set the text color to black
                  textDecoration: "none", // Remove underline
                  display: "inline-block", // Align text inline with the logo
                  verticalAlign: "middle", // Vertically align text with the logo
                }}
              >
                Ava
                <span
                  style={{
                    fontSize: "1rem", // Match the font size for consistency
                    fontWeight: "bold", // Make the text bold
                    color: "blue", // Set the color of "Intern" to blue
                    textDecoration: "none", // Ensure no underline
                  }}
                >
                  Intern
                </span>
              </span>
            </Link>
            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: { md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Dropdown Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  background: "rgba(255, 255, 255, 0.25)", // Semi-transparent white
                  backdropFilter: "blur(10px)", // Apply blur only to menu background
                  borderRadius: "12px",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  width: "90%",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={
                    page.name === "Courses"
                      ? toggleMobileCourses
                      : handleCloseNavMenu
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background:
                      "rgba(255, 255, 255, 0.25)" /* Semi-transparent white */,
                    backdropFilter: "blur(10px)",
                    fontSize: "100%",
                    width: "100%",
                  }}
                >
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: "none",
                      color: "blue",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                    target={page.target} // Add target attribute
                    rel={page.target ? "noopener noreferrer" : undefined} // Add rel attribute for security
                  >
                    {page.name}
                  </Typography>
                  {page.name === "Courses" && <ArrowDropDownSharpIcon />}
                </MenuItem>
              ))}

              {mobileCoursesOpen && (
                <Box sx={{ pl: 2 }}>
                  {courses.map((course) => (
                    <MenuItem
                      key={course.name}
                      onClick={handleCloseNavMenu}
                      sx={{ pl: 4 }}
                    >
                      <Typography
                        component={Link}
                        to={course.path}
                        sx={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "17px",
                          width: "100%",
                        }}
                      >
                        {course.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              )}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 3,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page.name}
                onClick={
                  page.name === "Courses"
                    ? handleOpenCoursesMenu
                    : handleCloseNavMenu
                }
                sx={{
                  my: 2,
                  textAlign: "center",
                  color: "blue",
                  fontWeight: "bolder",
                  display: "flex",
                  background: "white",
                  width: "100%",
                  margin: "auto 5px",
                  mx: index === 0 || index === 1 ? "0.1" : "0.3", // Reduce margin between "Home" and "About"
                  minWidth: "110px",
                  fontSize: "14px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    color: "black",
                    fontWeight: "bolder",
                    transition: "transform 0.2s ease",
                  },
                  overflow: "hidden",
                  position: page.name === "Home" ? "relative" : "initial",
                  left: page.name === "Home" ? "30px" : "initial", // Move the "Home" button 30px closer to "About"
                }}
                endIcon={
                  page.name === "Courses" ? <ArrowDropDownSharpIcon /> : null
                }
                component={Link}
                to={page.path === "#" ? "#" : page.path}
                target={page.target} // Add target attribute
                rel={page.target ? "noopener noreferrer" : undefined} // Add rel attribute for security
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Courses Dropdown with Popper and Animation */}
      <Popper
        id={id}
        open={open}
        anchorEl={anchorElCourses}
        transition
        placement="bottom-start"
        sx={{ zIndex: 1200, width: "650px" }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={500}>
            <Paper
              sx={{
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              <Grid container spacing={2}>
                {courses.map((course) => (
                  <Grid item xs={6} key={course.name}>
                    <MenuItem
                      onClick={handleCloseCoursesMenu}
                      sx={{
                        padding: "12px 16px",
                        transition: "all 0.3s ease-in-out",
                        borderRadius: "8px",
                        "&:hover": {
                          background: "rgba(0, 0, 0, 0.1)",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <Typography
                        component={Link}
                        to={course.path}
                        sx={{
                          textDecoration: "none",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "16px",
                          "&:hover": { color: "#ff5722" },
                        }}
                      >
                        {course.name}
                      </Typography>
                    </MenuItem>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grow>
        )}
      </Popper>
    </AppBar>
  );
}

export default ResponsiveAppBar;
