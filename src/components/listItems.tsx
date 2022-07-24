import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import AccountBox from "@mui/icons-material/AccountBox";
import NoteAddRounded from "@mui/icons-material/NoteAddRounded";
import { useNavigate } from "react-router-dom";

export const MainListItems = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/home", { replace: true })}>
        <ListItemIcon>
          <Home style={{ color: "#6a2116" }} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/profile", { replace: true })}>
        <ListItemIcon>
          <AccountBox style={{ color: "#6a2116" }} />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/notes", { replace: true })}>
        <ListItemIcon>
          <NoteAddRounded style={{ color: "#6a2116" }} />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItemButton>
    </React.Fragment>
  );
};

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
