import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {PersonalDetailsComponent} from "../components/PersonalDetailsComponent"
import {AdditionalDetailsComponent} from "../components/AdditionalDetailsComponent"


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function UserForm() {
    const [tabValue, setTabValue] = useState(0);
    const [formDetails, setFormDetails] = useState(
      {
        firstName: '',
        secondName: '',
        gender: '',
        age: '',
        number: '',
        email: '', 
        address: '',
        currentCTC: '',
        expectedCTC: '',
        department: '',
      }
    );

    const inputOnChange = (event) => {
      setFormDetails({...formDetails, [event.target.name]:event.target.value}) 
    }
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };
    
    return (
        <div>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Additional Details" {...a11yProps(1)} />
            </Tabs>
            <CustomTabPanel value={tabValue} index={0}>
                <PersonalDetailsComponent inputOnChange={inputOnChange} formDetails={formDetails}/>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={1}>
                <AdditionalDetailsComponent inputOnChange={inputOnChange} formDetails={formDetails}/>
            </CustomTabPanel>
        </div>
    )


}

