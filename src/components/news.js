import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone';
import BusinessIcon from '@material-ui/icons/Business';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import HomeIcon from '@material-ui/icons/Home';

import AllNews from './allNews'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function News() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"rgb(253, 142, 10)"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab  label="All" icon={<HomeIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab label="Sports" icon={<SportsCricketIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab label="Technology" icon={<SpeakerPhoneIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab label="Entertainment" icon={<InsertEmoticonIcon />} aria-label="help" {...a11yProps(3)} />
          <Tab label="Business" icon={<BusinessIcon />} aria-label="shopping" {...a11yProps(4)} />
          <Tab label="Health" icon={<FitnessCenterIcon />} aria-label="up" {...a11yProps(5)} />
          <Tab label="Science" icon={<EmojiObjectsIcon />} aria-label="down" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <AllNews></AllNews>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
