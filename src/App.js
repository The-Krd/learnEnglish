import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Learn from "./pages/Learn";
import AddWord from "./pages/AddWord";
import Login from "./pages/Login";
import { useState } from "react";

import * as React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Typography,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  AppBar,
} from "@mui/material";

function App(props) {
  return (
    <Switch>
      <Route path="/learn">
        <Learn />
      </Route>
      <Route path="/add">
        <AddWord />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}

// const drawerWidth = 230;

// function App(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {["Learn", "Add", "DeepL API"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["Login", "About", "Contact"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Learn English
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         sx={{ justifyContent: "space-between" }}
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
//         <Typography pt={5} variant="h2" component="h1">
//           Welcome to Learn English{" "}
//         </Typography>
//         <Typography py={4} pl={4} paragraph>
//           In App you can learn new words by repetition. Additionally you can
//           check them in DeepL.
//         </Typography>
//         <Button variant="outlined" href="#">
//           Check your lessons
//         </Button>
//       </Box>
//     </Box>
//   );
//   <Switch>
//     <Route path="/learn">
//       <Learn />
//     </Route>
//     <Route path="/add">
//       <AddWord />
//     </Route>
//     <Route path="/login">
//       <Login />
//     </Route>
//     <Route path="/">
//       <Welcome />
//     </Route>
//   </Switch>;
// }

export default App;
