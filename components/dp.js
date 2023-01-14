import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from 'moment-jalaali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function JalaliDatePicker() {
  

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
      
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}