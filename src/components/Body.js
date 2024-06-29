import React from "react";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Link,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

import user from "../assests/user1.png";
import resume from "../assests/cv.pdf";
import med from "../assests/med.jpg";
import learn from "../assests/learning.jpg";
import Bcan from "../assests/B can.jpg";
import image from "../assests/image.jpg";
import reactAvatar from "../assests/react.png";
import angularAvatar from "../assests/angular.png";
import vueAvatar from "../assests/vue.png";
import cssAvatar from "../assests/css.png";
import jsAvatar from "../assests/js.png";
import tsAvatar from "../assests/ts.png";
import bootstrapAvatar from "../assests/bootstrap.png";
import materialAvatar from "../assests/material.png";
import githubAvatar from "../assests/github.png";
import nextAvatar from "../assests/next.png";
import firebaseAvatar from "../assests/firebase.png";
import htmlAvatar from "../assests/html2.png";

//--------------------------------------------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemTwo = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#fff" : "black",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  maxWidth: "450px",
  height: "100%",
  margin: "auto",
}));

const handleWhatsAppClick = () => {
  const phoneNumber = "+94719258725";
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, "_blank");
};

//--------------------------------------------------------------------------------------------------------

function Body() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Box id="about" sx={{ padding: 3 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          gap={6}
        >
          <Box
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              alt="Profile pic"
              src={user}
              sx={{
                borderRadius: "50%",
                width: { xs: "200px", sm: "300px", md: "350px", lg: "400px" },
                height: { xs: "200px", sm: "300px", md: "350px", lg: "400px" },
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Grid
            item
            xs={11}
            sm={11}
            md={11}
            lg={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Hello, I'm
            </Typography>
            <Typography variant="h2" gutterBottom>
              Nirmal Kapilarathne
            </Typography>
            <Typography variant="h4" gutterBottom>
              Frontend Developer
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Welcome to my portfolio! As a dedicated front-end developer, I
              excel at transforming concepts into visually compelling and
              functional websites. My expertise in modern web technologies and
              meticulous attention to detail enable me to craft seamless user
              experiences. Great design is about more than aesthetics; it's
              about creating intuitive and accessible interfaces. With a passion
              for coding and a keen eye for design, I deliver responsive,
              high-performance websites that exceed expectations. Let's
              collaborate to bring your vision to life with innovative and
              functional digital experiences.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: 4,
                "& a": {
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  lineHeight: "36px",
                },
              }}
            >
              <a href={resume} download="Resume">
                Download CV
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box id="experience" sx={{ p: 5, mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Explore My
          </Typography>
          <Typography variant="h3" gutterBottom>
            Experience
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {/* Experience */}
          <Grid item xs={10} md={6}>
            <Item>
              <WorkspacePremiumIcon
                sx={{ mr: 1 }}
                fontSize="large"
                color="primary"
              />
              <Typography variant="h4" gutterBottom>
                Experience
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  <strong>Frontend Development</strong>
                  <br />
                  <Typography variant="body2">1+ years</Typography>
                </Typography>
              </Box>
            </Item>
          </Grid>

          {/* Education */}
          <Grid item xs={10} md={6}>
            <Item>
              <SchoolIcon sx={{ mr: 1 }} fontSize="large" color="primary" />
              <Typography variant="h4" gutterBottom>
                Education
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  <strong>B.Sc. in Software Engineering (Honors)</strong>
                  <br />
                  <Typography variant="body2">
                    University of Kelaniya, Sri Lanka
                  </Typography>
                </Typography>
              </Box>
            </Item>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Skills
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {skills.map((skillCategory, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12} sm={6}>
                          <List>
                            {skillCategory.skills
                              .slice(
                                0,
                                Math.ceil(skillCategory.skills.length / 2)
                              )
                              .map((skill, index) => (
                                <ListItem key={index}>
                                  <ListItemAvatar>
                                    <Avatar src={skill.avatar} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        style={{ fontWeight: "bold" }}
                                      >
                                        {skill.name}
                                      </Typography>
                                    }
                                    secondary={skill.level}
                                  />
                                </ListItem>
                              ))}
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <List>
                            {skillCategory.skills
                              .slice(Math.ceil(skillCategory.skills.length / 2))
                              .map((skill, index) => (
                                <ListItem key={index}>
                                  <ListItemAvatar>
                                    <Avatar src={skill.avatar} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        style={{ fontWeight: "bold" }}
                                      >
                                        {skill.name}
                                      </Typography>
                                    }
                                    secondary={skill.level}
                                  />
                                </ListItem>
                              ))}
                          </List>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box id="projects" sx={{ p: 5, mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Browse My Recent
          </Typography>
          <Typography variant="h3" gutterBottom>
            Projects
          </Typography>
        </Box>
        <Stack
          justifyContent="space-around"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          textAlign="center"
        >
          <Card
            sx={{
              maxWidth: 345,
              minWidth: 190,
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={med}
                alt="eMedicalApp"
                sx={{
                  objectFit: "initial",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  eMedicalApp
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Developed prototypes in React, Vue, and Angular frameworks
                  integrated with FHIR servers for fetching SNOMED CT medical
                  data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                color="primary"
                href="https://github.com/N-kapila/eMedicalApp"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  "&:hover": {
                    backgroundColor: "#6B9AB4",
                    color: "white",
                  },
                  borderRadius: "8px",
                  padding: "5px 16px",
                }}
              >
                Github
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              minWidth: 190,
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={learn}
                alt="eLearningApp"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  eLearningApp
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Developed an online learning application that allows teachers
                  to upload papers and enables students to complete them.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                color="primary"
                href="https://github.com/N-kapila/Learning-App"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  "&:hover": {
                    backgroundColor: "#6B9AB4",
                    color: "white",
                  },
                  borderRadius: "8px",
                  padding: "5px 16px",
                }}
              >
                Github
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              minWidth: 190,
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Bcan}
                alt="B.Can App"
                sx={{
                  objectFit: "initial",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  B.Can App
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Created a web app for breast cancer patients, aiding their
                  treatment journey with personalized care and medical
                  information.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                color="primary"
                href="https://github.com/N-kapila/eMedicalApp"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  "&:hover": {
                    backgroundColor: "#6B9AB4",
                    color: "white",
                  },
                  borderRadius: "8px",
                  padding: "5px 16px",
                }}
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Box>
      <Box id="contact" sx={{ p: 5, mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent={{ xs: "flex-start", sm: "center" }}
          alignItems="stretch"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Grid item xs={12} sm={12} lg={6} display="-moz-initial">
            <ItemTwo>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "-moz-initial",
                  alignItems: "center",
                  textAlign: "left",
                  py: 2,
                }}
              >
                <PersonOutlineIcon
                  sx={{ fontSize: 40, mr: 5, mb: 1 }}
                  color="primary"
                />{" "}
                <h2>
                  <b>Nirmal Kapilarathne</b>
                </h2>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "-moz-initial",
                  alignItems: "center",
                  textAlign: "center",
                  py: 2,
                }}
              >
                <MailOutlineIcon
                  sx={{ fontSize: 40, mr: 5, mb: 1 }}
                  color="primary"
                />{" "}
                <Link
                  href="mailto:nirmalkapilarathne.se@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  <h2>
                    <b>Email</b>
                  </h2>
                </Link>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "-moz-initial",
                  alignItems: "center",
                  textAlign: "left",
                  py: 2,
                }}
              >
                <PhoneInTalkIcon
                  sx={{ fontSize: 40, mr: 5, mb: 1 }}
                  color="primary"
                />{" "}
                <Link href="tel:+94719258725" color="inherit" underline="hover">
                  <h2>
                    <b>+94 719258725</b>
                  </h2>
                </Link>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "-moz-initial",
                  alignItems: "center",
                  textAlign: "left",
                  py: 2,
                }}
              >
                <LocationOnIcon
                  sx={{ fontSize: 40, mr: 5, mb: 1 }}
                  color="primary"
                />{" "}
                <h2>
                  <b>Colombo, Sri Lanka</b>
                </h2>
              </Box>
            </ItemTwo>
          </Grid>

          <Grid
            item
            lg={6}
            sx={{
              display: { xs: "none", sm: "none", lg: "flex" },
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ItemTwo
              sx={{
                flex: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <CardActionArea>
                <img
                  src={image}
                  alt="contact image"
                  style={{ width: "100%", height: "auto", flex: 1 }}
                />
              </CardActionArea>
            </ItemTwo>
          </Grid>
          <Box sx={{ textAlign: "center", pt: 5, width: "100%" }}>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/in/nirmal-kapilarathne-79b7331a1/"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                mr: 3,
                mb: 1,
              }}
            >
              <LinkedInIcon sx={{ fontSize: 30, color: "#0077B5" }} />
            </IconButton>

            <IconButton
              aria-label="github"
              href="https://github.com/N-kapila"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                mr: 3,
                display: { xs: "none", sm: "inline-block", md: "none" },
              }}
            >
              <GitHubIcon sx={{ fontSize: 30, color: "#24292e" }} />
            </IconButton>

            <IconButton
              aria-label="x"
              href="https://x.com/NKapilarathne"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                mr: 3,
                mb: 1,
              }}
            >
              <XIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              aria-label="facebook"
              href="https://web.facebook.com/nkmaxx.k"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                mr: 3,
                mb: 1,
              }}
            >
              <FacebookIcon sx={{ fontSize: 30, color: "#1877F2" }} />
            </IconButton>

            <IconButton
              aria-label="instagrame"
              href="https://www.instagram.com/_i_am_nim_z_/"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                mr: 3,
                mb: 1,
              }}
            >
              <InstagramIcon sx={{ fontSize: 30, color: "#e1306c" }} />
            </IconButton>

            <IconButton
              aria-label="whatsapp"
              onClick={handleWhatsAppClick}
              size="large"
              sx={{
                mr: 3,
                mb: 1,
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 30, color: "#075E54" }} />
            </IconButton>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

const skills = [
  {
    skills: [
      { name: "HTML", level: "Experienced", avatar: htmlAvatar },

      {
        name: "JavaScript",
        level: "Basic",
        avatar: jsAvatar,
      },
      { name: "Git", level: "Intermediate", avatar: githubAvatar },

      { name: "CSS", level: "Experienced", avatar: cssAvatar },

      {
        name: "TypeScript",
        level: "Basic",
        avatar: tsAvatar,
      },
      {
        name: "Firebase",
        level: "Intermediate",
        avatar: firebaseAvatar,
      },
    ],
  },
  {
    skills: [
      {
        name: "React",
        level: "Intermediate",
        avatar: reactAvatar,
      },

      { name: "Angular", level: "Basic", avatar: angularAvatar },
      {
        name: "Bootstrap",
        level: "Intermediate",
        avatar: bootstrapAvatar,
      },

      {
        name: "Vue.js",
        level: "Intermediate",
        avatar: vueAvatar,
      },
      { name: "Next.js", level: "Basic", avatar: nextAvatar },
      {
        name: "Material UI",
        level: "Intermediate",
        avatar: materialAvatar,
      },
    ],
  },
];
export default Body;
