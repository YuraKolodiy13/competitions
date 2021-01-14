import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';

const DatePicker = ({selected, name, onChange, label, views, format, disabled}) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        views={views}
        inputVariant="outlined"
        format={format}
        margin="normal"
        name={name}
        label={label}
        value={selected}
        disabled={disabled}
        onChange={(date => onChange(date))}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;