import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";

const not = f => () => !f();
const always = () => true;

function signedIn() {
  // TODO: return true when signed in.
}

function MenuList() {

  const menuLinks = [
    {
      text: 'Home',
      path: '/',
      when: always,
    },
    {
      text: 'Login',
      path: '/login',
      when: always, // For debugging purposes. FIXME: use correct filter.
      // when: not(signedIn),
    },
    {
      text: 'Sign Up',
      path: '/sign-up',
      when: always, // For debugging purposes. FIXME: use correct filter.
      // when: not(signedIn),
    },
    {
      text: 'Profile',
      path: '/profile',
      when: always, // For debugging purposes. FIXME: use correct filter.
      // when: signedIn,
    },
    {
      text: 'Companies',
      path: '/companies',
      when: always, // For debugging purposes. FIXME: use correct filter.
      // when: signedIn,
    },
  ].filter(({ when }) => when());

  // TODO: Add logout link or functionality.

  return (
    <Drawer variant='permanent' anchor='left'>
      <List>
        {menuLinks.map(({ text, path }) => (
          <ListItem button key={text} component={Link} to={path} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuList;
