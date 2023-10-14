import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import MultipleSelectComponent from "../components/MultiSelectComponent"
import TagComponent from "../components/TagComponent"
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';



export function AdditionalDetailsComponent({inputOnChange, formDetails}) {
    const [department, setDepartment] = useState('');

    const handleChange = (event) => {
      setDepartment(event.target.value);
    };

    function submitForm() {
      console.log("-------------------", formDetails)
    }

    return (
        <div className="pageConatinerStyle">
            <FormControl className="inputBoxStyle" variant="outlined">
              <InputLabel htmlFor="currentCTC">Current CTC</InputLabel>
              <OutlinedInput
                label="Current CTC"
                name="currentCTC"
                value={formDetails.currentCTC}
                onChange={inputOnChange}
                endAdornment={<InputAdornment position="end">LPA</InputAdornment>}
              />
            </FormControl>

            <FormControl className="inputBoxStyle" variant="outlined" style={{marginLeft:10}}>
              <InputLabel htmlFor="expectedCTC">Expected CTC</InputLabel>
              <OutlinedInput
                label="Expected CTC"
                name="expectedCTC"
                value={formDetails.expectedCTC}
                onChange={inputOnChange}
                endAdornment={<InputAdornment position="end">LPA</InputAdornment>}
              />
            </FormControl>
            <div className="separator"/>

            <FormControl className="inputBoxStyle">
                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    label="Department"
                    name="department"
                    value={formDetails.department}
                    onChange={inputOnChange}
                >
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Customer Success">Customer Success</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
                </Select>
            </FormControl>
            <div className="separator"/>
            <MultipleSelectComponent inputOnChange={inputOnChange} formDetails={formDetails}/>
            <div className="separator"/>
            <TagComponent inputOnChange={inputOnChange} formDetails={formDetails}/>
            <div className="separator"/>              
            <Switch defaultChecked /> Currently Employed
            <div className="separator"/>              

            <Button onClick={submitForm} className="saveBtn" variant="contained">Save</Button>
        </div>
    )
}