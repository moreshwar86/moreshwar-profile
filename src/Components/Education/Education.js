import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import './education.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  
export default function Education() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <List>

        {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }} className='heading1'>
        <AssignmentIndIcon style={{ fontSize: 40 }} color='primary' />
            <span>Education</span>
        </div>   */}

        <span className="education-heading">Education</span>
        <h2 className="education-heading1">Education</h2>
        
      <ListItem button onClick={handleClick} style={{"background":"#eae1e1", "marginBottom":"0.5em" }}>
        <ListItemIcon>
          {/* <InboxIcon /> */}
        </ListItemIcon>
        <ListItemText>
            <span className='education-text-header'>Bachelors Degree Information Technology</span>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText>
                <p>Completed Bachelors degree in Information Technology from <strong>Walchand college of Engineering, Sangli</strong></p>
                <p>with CGPI of 6.36</p>
                <p>Year of passing - 2015</p>
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick1} style={{"background":"#eae1e1", "marginBottom":"0.5em" }}>
        <ListItemIcon>
          {/* <InboxIcon /> */}
        </ListItemIcon>
        <ListItemText><span className='education-text-header'>Diploma in Computer</span></ListItemText>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText>
                <p>Completed Diploma in Computer Engineering from <strong>SVERI's college of Engineering, Pandharpur</strong></p>
                <p>with percentile of 82.58</p>
                <p>Year of passing - 2012</p>
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick2} style={{"background":"#eae1e1", "marginBottom":"0.5em" }}>
        <ListItemIcon>
          {/* <InboxIcon /> */}
        </ListItemIcon>
        <ListItemText><span className='education-text-header'>SSC</span></ListItemText>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText>
                <p>Completed Senior Secondary Certificate Examination with a percentile of 85.07</p>
                <p>Year of passing - 2009</p>
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
