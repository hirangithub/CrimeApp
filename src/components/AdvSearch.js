import React from 'react';
import { TextField, Select, MenuItem, FormControl, FormLabel, Box } from '@material-ui/core';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from '@mui/lab/TimePicker';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        //prefix="Rs."
      />
    );
});
  
NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const AdvSearch = () => {

    const [valselect, setVal] = React.useState('');
    const handleDropdownSelect = (event) => {
        setVal(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());
    const handleDateTimePicker = (newValue) => {
        setValue(newValue);
    };

    const [values, setValues] = React.useState({
        numberformat: '50000',
    });
    const handleChangeNum = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (  
        <Box display="grid" className="adv-search-form">

            <FormControl variant="outlined" component="fieldset" className="ctrl-width">
                <FormLabel component="legend">අපරාධයේ වර්ගය</FormLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={valselect}
                    onChange={handleDropdownSelect}
                >
                    <MenuItem value={10}>මනුෂ්‍ය ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම</MenuItem>
                    <MenuItem value={20}>සිය පණ හාණිකර ගැනීමට අනුබල දීම 2</MenuItem>
                    <MenuItem value={30}>මනුෂ්‍ය ඝාතනයට තැත් කිරීම 3</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">සිද්ධ්ය වූ දිනය / දින පරාසය</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                    <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">සිද්ධ්ය වූ වේලාව / වේලා පරාසය</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                    <TimePicker
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">දේපල වල වටිනාකම (අවම - උපරිම)</FormLabel>
                <TextField
                        value={values.numberformat}
                        onChange={handleChangeNum}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                        variant="outlined"
                />
                <TextField
                        value={values.numberformat}
                        onChange={handleChangeNum}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                        variant="outlined"
                />
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control flex-ctrl">
                <FormLabel component="legend">තොරතුරු පොතේ නම පිටුව / ඡේදය</FormLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select2"
                    value={valselect}
                    onChange={handleDropdownSelect}
                    className="flex-half"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField id="outlined-basic" variant="outlined" />
            </FormControl>

            <FormControl variant="outlined" component="fieldset">
                <FormLabel component="legend">සිද්ධිය වූ ග්‍රාම නිලධාරී වසම</FormLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={valselect}
                    onChange={handleDropdownSelect}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">වාර්තා වූ දිනය / දින පරාසය</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                    <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">වාර්තා වූ වේලාව / වේලා පරාසය</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                    <TimePicker
                        value={value}
                        onChange={handleDateTimePicker}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>

            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                <FormLabel component="legend">සිද්ධිය වූ ස්ථානය</FormLabel>
                <TextField id="outlined-basic" variant="outlined" className="ctrl-width-2" />
            </FormControl>

        </Box>

    );

}

export default AdvSearch;