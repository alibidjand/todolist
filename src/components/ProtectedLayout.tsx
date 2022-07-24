// import * as React from "react";
// import MuiAppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";

// import MenuItem from "@mui/material/MenuItem";
// import { To, useNavigate } from "react-router-dom";
// import { useAuth } from "../hook/useAuth";

// export const AppBar = ({
//   pages,
// }: {
//   pages: { label: string; path: string }[];
// }) => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const handleOpenNavMenu = (event: any) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = (path: To) => {
//     setAnchorElNav(null);
//     if (path) {
//       navigate(path);
//     }
//   };

//   return (
//     <MuiAppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             Ali Bidjandy
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages?.map((page) => (
//                 <MenuItem
//                   key={page.label}
//                   onClick={() => handleCloseNavMenu(page.path)}
//                 >
//                   <Typography textAlign="center">{page.label}</Typography>
//                 </MenuItem>
//               ))}
//               {!!user && (
//                 <MenuItem key={"logout"} onClick={logout}>
//                   <Typography textAlign="center">Logout</Typography>
//                 </MenuItem>
//               )}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             React Router Auth
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages?.map((page) => (
//               <Button
//                 key={page.label}
//                 onClick={() => handleCloseNavMenu(page.path)}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page.label}
//               </Button>
//             ))}
//             {!!user && (
//               <Button
//                 key={"logout"}
//                 onClick={logout}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {"logout"}
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </MuiAppBar>
//   );
// };

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Logout from "@mui/icons-material/Logout";
import { MainListItems } from "./listItems";
import { useAuth } from "../hook/useAuth";
import { Navigate, useNavigate, useOutlet } from "react-router-dom";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    // backgroundColor: "red",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function ProtectedLayout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { logout } = useAuth();
  const outlet = useOutlet();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (
    Object.keys(user).length === 0 ||
    (user.email === "" && user.password === "")
  ) {
    return <Navigate to="/" />;
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              background:
                "linear-gradient(268.51deg, rgb(255 127 110) 3.52%, rgb(70 10 0) 116.72%)",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/profile", { replace: true })}
            >
              {user.email}
            </Typography>
            <IconButton onClick={() => logout()} color="inherit">
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {outlet}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Home() {
  return <ProtectedLayout />;
}
