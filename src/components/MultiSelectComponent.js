import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'On-Site',
  'Hybrid',
  'Remote',
];

export default function MultipleSelectComponent({inputOnChange, formDetails}) {
  const [workModel, setWorkModel] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setWorkModel(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl className="inputBoxStyle">
        <InputLabel id="demo-multiple-chip-label">Preffered Work Model</InputLabel>
        <Select
          name="workModel"
          multiple
          value={workModel}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
                ))}
            </Box>
          )}
          MenuProps={MenuProps}
          label="Preffered Work Model"
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}