import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import { data_zagotovki } from '../../data/data_zagotovki';

import s from '../../css/group.module.css';

const style = {
  width: '100%',
  maxWidth: 360,
  color: '#ffffff',
};

export const Zagotovkis = () => {
  const menuItem = data_zagotovki.map(i => (
    <Link className={s.menuItem} key={i.id} to={`/zagotovki/${i.id}`}>
      <ListItem button>
        <ListItemText primary={i.name} />
      </ListItem>
    </Link>
  ));
  return (
    <>
      <div className="container">
        <h1>Заготовки на зиму</h1>

        <List sx={style} component="nav" aria-label="mailbox folders">
          {menuItem}
        </List>
      </div>
    </>
  );
};
