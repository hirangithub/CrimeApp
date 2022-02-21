import React from 'react';
import { Container, Grid, TextField, Button, Box, Link, Typography, Dialog, Table, TableBody, TableContainer, TableHead, TableRow, TableFooter, TablePagination, AppBar, Slide, Toolbar } 
    from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import PopupContent from './PopupContent';
import AdvSearch from './AdvSearch';
import './global.scss'; 


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderRadius: '0',
    transition: 'none'
}));

{/* Advanced search expand panel */}     
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

{/* Data grid related functions */}    
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

function createData(crimeNumber, crimeType, gsDivision, placeOfIncident, 
  dateTimeOfIncident, reportedDateTime, 
  infomationBookName, pageAndPara, valueOfProperty) {
  return { 
    crimeNumber, 
    crimeType, 
    gsDivision, 
    placeOfIncident, 
    dateTimeOfIncident, 
    reportedDateTime, 
    infomationBookName, 
    pageAndPara, 
    valueOfProperty };
}

const rows = [
    createData('34/2021', 'GC-001 මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '201/50', 15334534.00),
    createData('24/2021', 'GC-002 වංචා / සාපරාධී සාවද්‍ය පරිහරණය, විශ්වාසය කඩ කිරීම. රු 100,000/- විශේෂ අපරාධ විමර්ශන අංශයට වාර්තා වූ',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, සහන මාවත,රාජගිරිය ', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/20', 22344.00),
    createData('14/2021', 'GC-001 මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/50', 0.00),
    createData('12/2021', 'GC-003 බලෙන් ලබා ගැනීම් ( මුදලක් යම් දේපලක් හෝ වටිනා ඇපයකට හැරවිය හැකි අත්සන් තැබූ යමක්)',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/50', 15334534),
    createData('10/2021', 'GC-001 මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/50', 15334534),
    createData('09/2021', 'GC-001 මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/50', 15334534),
    createData('34/2021', 'GC-001 මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම',
    'මිරිහාන දකුණ', '156/32 අසිරි උයන, පුර්වාරාම විහාර මාවත , හෝමාගම', 
    '2021-12-23 21:20','2021-12-24 10:00', 'GCIB', '200/50', 15334534),    
  ].sort((a, b) => (a.dateTimeOfIncident < b.dateTimeOfIncident ? -1 : 1));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Home = () => {

    {/* Advsearch expand/hide state */}    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    {/* Data grid related states */}    
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

    {/* Popup show/hide state */}    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                            {/* Advanced search content loads here */}
                            <AdvSearch />
                        </Collapse>
                    </div>
                    <div className="content-block lower"> 
                        <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>                     
                            <Typography variant="h2" sx={{ paddingBottom: '0' }}>බල අපරාධ ලේඛණය</Typography> 
                            <Button color="secondary" variant="contained" onClick={handleClickOpen}>නව අපරාධ ඇතුලත් කිරීම</Button>
                        </Box>

                        {/* Data grid loads here */}
                        <TableContainer component={Paper} className="data-grid-holder">
                            <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                <TableHead>
                                  <TableRow style={{ verticalAlign: 'top' }}>
                                    <StyledTableCell>අපරාධ අංකය</StyledTableCell> 
                                    <StyledTableCell>අපරාධයේ වර්ගය</StyledTableCell>
                                    <StyledTableCell>ග්‍රාම නිලධාරී වසම</StyledTableCell>
                                    <StyledTableCell>සිද්ධිය වූ ස්ථානය</StyledTableCell>
                                    <StyledTableCell>සිද්ධිය වූ දිනය වේලාව</StyledTableCell>
                                    <StyledTableCell>වාර්ථා වූ දිනය වේලාව</StyledTableCell>
                                    <StyledTableCell>තොරතුරු පොතේ නම</StyledTableCell>
                                    <StyledTableCell>පිටුව/ ඡේදය</StyledTableCell>
                                    <StyledTableCell>දේපලවල වටිනාකම</StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <StyledTableRow key={row.name} style={{ verticalAlign: 'top' }}>
                                                <TableCell style={{ width: 80 }} component="th" scope="row" >
                                                    {row.crimeNumber}
                                                </TableCell>
                                                <TableCell style={{ minWidth: 210 }} >
                                                    {row.crimeType}
                                                </TableCell>
                                                <TableCell style={{ width: 150 }} >
                                                    {row.gsDivision}
                                                </TableCell>
                                                <TableCell style={{ minWidth: 150 }} >
                                                    {row.placeOfIncident}
                                                </TableCell>
                                                <TableCell style={{ width: 160 }} >
                                                    {row.dateTimeOfIncident}
                                                </TableCell>
                                                <TableCell style={{ width: 160 }} >
                                                    {row.reportedDateTime}
                                                </TableCell>
                                                <TableCell style={{ width: 120 }} >
                                                    {row.infomationBookName}
                                                </TableCell>
                                                <TableCell style={{ width: 100 }} >
                                                    {row.pageAndPara}
                                                </TableCell>
                                                <TableCell style={{ width: 160 }}>
                                                    {row.valueOfProperty}
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
                                            colSpan={9}
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

                        {/* Popup content starts here */}                            
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

                            {/* Popup content loads here */}                        
                            <PopupContent />
                            
                        </Dialog>

                    </div>
                </Grid>
            </Grid>
        </Container>
        )
    }

export default Home;
