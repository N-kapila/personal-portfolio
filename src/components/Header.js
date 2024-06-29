import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import user from "../assests/user1.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const drawerWidth = 240;
const navItems = ["About", "Experience", "Projects", "Contact"];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ my: 2 }}>
          <b> Nirmal Kapilarathne</b>
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                href={`#${item.toLowerCase()}`}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ padding: 5 }}>
        <Button
          variant="contained"
          href="https://github.com/N-kapila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ mr: 1 }} />
          Github
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar
            sx={{ backgroundColor: "#2E3B55", height: { xs: 60, sm: 75 } }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontWeight: "Bolder",
              }}
            >
              Nirmal Kapilarathne
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "block" },
                justifyContent: "center",
                width: "60%",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{ color: "#fff" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <IconButton
                aria-label="github"
                href="https://github.com/N-kapila"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                <GitHubIcon fontSize="large" sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" }, ml: "auto" }}>
              <Avatar alt="Remy Sharp" src={user}>
                NK
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
