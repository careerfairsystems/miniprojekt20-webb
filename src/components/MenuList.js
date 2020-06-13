import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link} from "react-router-dom";


function MenuList() {
  return (
    <div className="MenuList">
      <Drawer
        variant='permanent'
        anchor='left'
      >
        <Divider />
        <List>
            <div>
              <ListItem button key={"Login"} component={Link} to="/login">
                <ListItemText primary={"Login"} />
              </ListItem>

              <ListItem button key={"Sign Up"} component={Link} to="/sign-up">
                <ListItemText primary={"Sign Up"} />
              </ListItem>

              <ListItem button key={"Profile"} component={Link} to="/profile">
                <ListItemText primary={"Profile"} />
              </ListItem>

              <ListItem button key={"Companies"} component={Link} to="/companies">
                <ListItemText primary={"Companies"} />
              </ListItem>
            </div>
        </List>
      </Drawer>
    </div>
  );
}

export default MenuList;