import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export function PersonalDetailsComponent({inputOnChange, formDetails}) {

    return(
        <div className="pageConatinerStyle">
            <TextField className="inputBoxStyle"
                name="firstName" 
                label="First Name" 
                value={formDetails.firstName}
                onChange={inputOnChange}
            /> 
            <TextField className="inputBoxStyle"
            name="secondName" 
            label="Last Name" 
            style={{marginLeft:10}}
            value={formDetails.secondName}
                onChange={inputOnChange}
            />
            <div className="separator"/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    value={formDetails.gender}
                    onChange={inputOnChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <div className="separator"/>
            <TextField className="inputBoxStyle" 
                name="age" 
                label="Age"
                value={formDetails.age}
                onChange={inputOnChange}
            />
            <div className="separator"/>
            <TextField className="inputBoxStyle" 
                name="number" 
                label="Mobile Number"
                value={formDetails.number}
                onChange={inputOnChange}
            />
            <div className="separator"/>
            <TextField className="inputBoxStyle" 
                name="email" 
                label="Email ID" 
                value={formDetails.email}
                onChange={inputOnChange}
            />
            <div className="separator"/>
            <TextField 
                label="Address"
                name="address"
                value={formDetails.address}
                onChange={inputOnChange}
                multiline
                rows={3}
                fullWidth
            />
        </div>
    )
}
