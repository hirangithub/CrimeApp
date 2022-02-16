import React from 'react';
import { Container, Divider, Grid, TextField, Button, Box, Link, Select, MenuItem, FormControl, FormLabel, Typography, Dialog, Table, TableBody, TableContainer, TableHead, TableRow, TableFooter, TablePagination, AppBar, Slide, Toolbar } 
    from '@material-ui/core';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from '@mui/lab/TimePicker';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TagsInput from './TagsInput';
import './global.scss'; 


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderRadius: '0',
    transition: 'none'
}));


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

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


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Home = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());
    const handleChangeDate = (newValue) => {
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

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    
    function handleSelecetedTags(items) {
        console.log(items);
    }

    const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

    return (               
        <Container className="container-holder" maxWidth={false} disableGutters={true}>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
                item={true}
            >
                <Grid item xs={12} className="content-holder">
                    <div className="content-block upper"> 
                        <Box display="grid" className="search-form">
                            <TextField id="outlined-basic" label="Search" variant="outlined" />
                            <Button color="secondary" variant="contained">Search (සෙවීම)</Button>
                            
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="advanced search"
                                className="adv-search-link"
                                >
                                <Link>Advanced search (සෙවීම)</Link>
                            </ExpandMore>
                        </Box>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Box display="grid" className="adv-search-form">
                                
                                <FormControl variant="outlined" component="fieldset" className="ctrl-width">
                                    <FormLabel component="legend">අපරාධයේ වර්ගය</FormLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
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
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                        <DesktopDatePicker
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                    </LocalizationProvider>
                                </FormControl>

                                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                    <FormLabel component="legend">සිද්ධ්ය වූ වේලාව / වේලා පරාසය</FormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <TimePicker
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                        <TimePicker
                                            value={value}
                                            onChange={handleChangeDate}
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
                                        value={age}
                                        onChange={handleChange}
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
                                        value={age}
                                        onChange={handleChange}
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
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                        <DesktopDatePicker
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                    </LocalizationProvider>
                                </FormControl>

                                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                    <FormLabel component="legend">වාර්තා වූ වේලාව / වේලා පරාසය</FormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <TimePicker
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                        <TimePicker
                                            value={value}
                                            onChange={handleChangeDate}
                                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                                        />
                                    </LocalizationProvider>
                                </FormControl>

                                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                    <FormLabel component="legend">සිද්ධිය වූ ස්ථානය</FormLabel>
                                    <TextField id="outlined-basic" variant="outlined" className="ctrl-width-2" />
                                </FormControl>

                            </Box>
                        </Collapse>
                    </div>
                    <div className="content-block lower"> 
                        <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>                     
                            <Typography variant="h2" sx={{ paddingBottom: '0' }}>බල අපරාධ ලේඛණය</Typography> 
                            <Button color="secondary" variant="contained" onClick={handleClickOpen}>නව අපරාධ ඇතුලත් කිරීම</Button>
                        </Box>

                        <TableContainer component={Paper} className="data-grid-holder">
                            <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                    <StyledTableCell align="right">Calories</StyledTableCell>
                                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell style={{ width: 160 }} align="right">
                                                    {row.calories}
                                                </TableCell>
                                                <TableCell style={{ width: 160 }} align="right">
                                                    {row.fat}
                                                </TableCell>
                                            </StyledTableRow>
                                    ))}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>

                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                            className="entry-popup"
                        >
                            <AppBar sx={{ position: 'relative' }} className="toolbar-popup" position="sticky">
                                <Toolbar>
                                    <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                    >
                                    <CloseIcon />
                                    </IconButton>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                        බල අපරාධයක් පිලිබද පලමු තොරතුරු ඇතුළත් කිරීම 
                                    </Typography>
                                    <Button autoFocus variant="outlined" onClick={handleClose}>Save changes</Button>
                                </Toolbar>
                            </AppBar>
                            <Stack spacing={4} direction="column" className="popup-container">
                                <Item>
                                    <Typography variant="h3">තොරතුරු පොතේ සටහන</Typography> 

                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">අනුක්‍රමික අංකය</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>   
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li className="w w-65">
                                                <FormLabel component="legend">තොරතුරු පොතේ නම</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                            <li className="w w-35">
                                                <FormLabel component="legend">පිටුව/ චේදය</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                        </ul>
                                    </FormControl>    
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li>
                                                <FormLabel component="legend">පොලිස් ස්ථානයට වාර්තා වූ දිනය</FormLabel>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DesktopDatePicker
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </li>
                                            <li>
                                                <FormLabel component="legend">පොලිස් ස්ථානයට වාර්තා වූ වේලාව</FormLabel>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <TimePicker
                                                        value={value}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </li>
                                        </ul>
                                    </FormControl>   
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul className="spec-label">
                                            <li>
                                                <FormLabel component="legend">පැමිණිල්ල සටහන් කිරීමට ගත වූ කාලය</FormLabel>
                                                <TextField type="number" id="outlined-basic" variant="outlined" />
                                                <label>මිනිත්තු</label>
                                            </li>
                                            <li>&nbsp;</li>
                                        </ul>
                                    </FormControl>
                                </Item>
                                <Divider />   
                                <Item>
                                    <Typography variant="h3">අපරාධය පිළිබද විස්තරය</Typography> 

                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">සිද්ධිය වූ ග්‍රාම නිලධාරී වසම</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>වසම 1</MenuItem>
                                            <MenuItem value={20}>වසම 2</MenuItem>
                                            <MenuItem value={30}>වසම 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">සිද්ධිය වූ ස්ථානය</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul className="spec-label">
                                            <li className="last-child">
                                                <FormLabel component="legend">සිද්ධිය වූ ස්ථානයේ ග්‍රිඩ් අන්කය</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                                <label>My location</label>
                                            </li>
                                        </ul>
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li>
                                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය</FormLabel>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DesktopDatePicker
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </li>
                                            <li>
                                                <FormLabel component="legend">සිද්ධ්ය වූ වේලාව</FormLabel>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <TimePicker
                                                        value={value}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </li>
                                        </ul>
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">අපරාධයේ වර්ගය</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම</MenuItem>
                                            <MenuItem value={20}>සිය පණ හාණිකර ගැනීමට අනුබල දීම</MenuItem>
                                            <MenuItem value={30}>මනුෂ ඝාතනයට තැත් කිරීම</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">අපරාධය පිළිබද කෙටි විස්තරය</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">නීතියේ වගන්ති</FormLabel>
                                        <TagsInput
                                            selectedTags={handleSelecetedTags}  
                                            variant="outlined"
                                            id="tags"
                                            name="tags"
                                            placeholder="Select or add tags"
                                        />
                                    </FormControl>
                                </Item>
                                <Divider />  
                                <Item>
                                    <Typography variant="h3">පැමිණිලිකරු පිළිබද විස්තර</Typography> 
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">නීතියේ වගන්ති</FormLabel>
                                        <TagsInput
                                            selectedTags={handleSelecetedTags}  
                                            variant="outlined"
                                            id="tags"
                                            name="tags"
                                            placeholder="Select or add tags"
                                        />
                                    </FormControl>

                                    <Typography variant="h4">දේපල සම්බන්ද තොරතුරු</Typography> 
                                    <div className="bg-on">
                                        <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                            <ul>
                                                <li className="w w-50">
                                                    <FormLabel component="legend">දේපල</FormLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>රත්‍රන් මාල</MenuItem>
                                                        <MenuItem value={20}>පරිගණක</MenuItem>
                                                        <MenuItem value={30}>ජංගම දුරකථන</MenuItem>
                                                    </Select>
                                                </li>
                                                <li className="w w-25">
                                                    <FormLabel component="legend">වටිනාකම</FormLabel>
                                                    <TextField id="outlined-basic" variant="outlined" />
                                                </li>
                                                <li className="w w-25">
                                                    <FormLabel component="legend">&nbsp;</FormLabel>
                                                    <Link href="#" underline="none" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <AddCircleOutlineIcon /> Add item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </FormControl>
                                    </div>
                                    <div className="inner-form-control cal-table">
                                        <div>
                                            <ul>
                                                <li className="w w-50">
                                                    sd asd a da da sd
                                                </li>
                                                <li className="w w-25">
                                                    43535345345345
                                                </li>
                                                <li className="w w-25">
                                                    <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="w w-50">
                                                    sd asd a da da sd
                                                </li>
                                                <li className="w w-25">
                                                    43535345345345
                                                </li>
                                                <li className="w w-25">
                                                    <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                                                </li>
                                            </ul>
                                        </div>
                                        <Divider />
                                        <div className="footer"> 
                                            <ul>
                                                <li className="w w-50">
                                                    මුළු වටිනාකම
                                                </li>
                                                <li className="w w-25">
                                                    1,250,000.00
                                                </li>
                                                <li className="w w-25">
                                                    &nbsp;
                                                </li>
                                            </ul>
                                        </div>
                                    </div> 
                                    
                                    <br />

                                    <Typography variant="h4">සොයාගත් දේපල සම්බන්ද තොරතුරු</Typography> 
                                    <div className="bg-on">
                                        <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                            <ul>
                                                <li className="w w-50">
                                                    <FormLabel component="legend">දේපල</FormLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>රත්‍රන් මාල</MenuItem>
                                                        <MenuItem value={20}>පරිගණක</MenuItem>
                                                        <MenuItem value={30}>ජංගම දුරකථන</MenuItem>
                                                    </Select>
                                                </li>
                                                <li className="w w-25">
                                                    <FormLabel component="legend">වටිනාකම</FormLabel>
                                                    <TextField id="outlined-basic" variant="outlined" />
                                                </li>
                                                <li className="w w-25">
                                                    <FormLabel component="legend">&nbsp;</FormLabel>
                                                    <Link href="#" underline="none" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <AddCircleOutlineIcon /> Add item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </FormControl>
                                    </div>
                                    <div className="inner-form-control cal-table">
                                        <div>
                                            <ul>
                                                <li className="w w-50">
                                                    sd asd a da da sd
                                                </li>
                                                <li className="w w-25">
                                                    43535345345345
                                                </li>
                                                <li className="w w-25">
                                                    <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="w w-50">
                                                    sd asd a da da sd
                                                </li>
                                                <li className="w w-25">
                                                    43535345345345
                                                </li>
                                                <li className="w w-25">
                                                    <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                                                </li>
                                            </ul>
                                        </div>
                                        <Divider />
                                        <div className="footer"> 
                                            <ul>
                                                <li className="w w-50">
                                                    මුළු වටිනාකම
                                                </li>
                                                <li className="w w-25">
                                                    1,250,000.00
                                                </li>
                                                <li className="w w-25">
                                                    &nbsp;
                                                </li>
                                            </ul>
                                        </div>
                                    </div> 
                                </Item>
                                <Divider />  
                                <Item>
                                    <Typography variant="h3">ස්ථිර කිරීම</Typography> 

                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li>
                                                <FormLabel component="legend">ජාතික හැඳුනුම්පත් අංකය</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                            <li>
                                                <FormLabel component="legend">විදේශ ගමන් බලපත්‍ර අංකය</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                        </ul>
                                    </FormControl>  
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">පැමිණිලිකරුගේ නම</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">ලිපිනය</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li>
                                                <FormLabel component="legend">වයස</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                            <li>
                                                <FormLabel component="legend">ස්ත්‍රී/පුරුෂ භාවය</FormLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>පුරුෂ</MenuItem>
                                                    <MenuItem value={20}>ස්ත්‍රී</MenuItem>
                                                </Select>
                                            </li>
                                        </ul>
                                    </FormControl>  
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <ul>
                                            <li>
                                                <FormLabel component="legend">දුරකථන අංකය 1</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                            <li>
                                                <FormLabel component="legend">දුරකථන අංකය 2</FormLabel>
                                                <TextField id="outlined-basic" variant="outlined" />
                                            </li>
                                        </ul>
                                    </FormControl>  
                                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                        <FormLabel component="legend">පැමිණිලිකරු වින්දිතයා නොවන්නේ නම් පැමිණිලිකරුට වින්දිතයාට ඇති සම්බන්ධතාවය</FormLabel>
                                        <TextField id="outlined-basic" variant="outlined" />
                                    </FormControl>
                                </Item>
                            </Stack>
                        </Dialog>

                    </div>
                </Grid>
            </Grid>
        </Container>
        )
    }

export default Home;
