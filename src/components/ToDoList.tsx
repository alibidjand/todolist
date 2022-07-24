import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForever from "@mui/icons-material/DeleteForever";
import { useAppDispatch, useAppSelector } from "../state/redux/hooks/hooks";
import {
  clearToDoListItem,
  getUser,
  ToDoList,
} from "../state/redux/slice/authSlice";

export default function ToDoListComponent() {
  const [checked, setChecked] = React.useState([0]);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const [todos, setTodos] = React.useState<ToDoList[]>();
  React.useEffect(() => {
    setTodos(user.toDoList);
  }, [user.toDoList]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log("user", user.toDoList);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <List
      sx={{
        width: "100%",

        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 500,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {todos?.map(({ date, number, title }) => {
        const labelId = `checkbox-list-label-${number}`;

        return (
          <ListItem
            key={number}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => dispatch(clearToDoListItem(number))}
              >
                <DeleteForever />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(number)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(number) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={title} />
              <ListItemText primary={date} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
