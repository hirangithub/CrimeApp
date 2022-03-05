import React from 'react';
import { Container, Grid, FormControl, FormLabel, TextField, Button, Box, Link, Typography, Dialog, Table, TableBody, TableContainer, TableHead, TableRow, TableFooter, TablePagination, AppBar, Slide, Toolbar } 
    from '@material-ui/core';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ManIcon from '@mui/icons-material/Man';
import MaleIcon from '@mui/icons-material/Male';
import BadgeIcon from '@mui/icons-material/Badge';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import NumbersIcon from '@mui/icons-material/Numbers';
import PublicIcon from '@mui/icons-material/Public';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import ProfileImage from '../assets/p-1.jpg';
import ProfileImage2 from '../assets/p-2.jpg';
import './global.scss'; 


function TabPanel(props) {
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

TabPanel.propTypes = {
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

const options = [
  'Edit',
  'Save & publish',
  'Save as draft',
  'Delete',
];
const ITEM_HEIGHT = 48;

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


const GCRDetail = () => {

    {/* Advsearch expand/hide state */}    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    {/* Contexual menu */}    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [expanded2, setExpanded2] = React.useState(false);
    const handleChangeAccordian = (panel) => (event, isExpanded) => {
      setExpanded2(isExpanded ? panel : false);
    };


    return (               
        <Container className="container-holder" maxWidth={false} disableGutters={true}>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
                item={true}
                className="page-gcr-detail"
            >
                <Grid item xs={12} className="content-holder">
                    <div className="content-block upper"> 
                        <Box display="grid">
                            <Typography variant="h3" sx={{ paddingBottom: '0' }}>34/2021: මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම</Typography> 
                            <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">                     
                              <Typography variant="subtitle2">GC00001</Typography> 
                              <Typography variant="subtitle2"><FiberManualRecordIcon sx={{ width: '.5rem', height: '.5rem', opacity: '.7' }} /></Typography> 
                              <Typography variant="subtitle2">content goes here</Typography> 
                              <Typography variant="subtitle2"><FiberManualRecordIcon sx={{ width: '.5rem', height: '.5rem', opacity: '.7' }} /></Typography> 
                              
                              <ExpandMore
                                  expand={expanded}
                                  onClick={handleExpandClick}
                                  aria-expanded={expanded}
                                  aria-label="advanced search"
                                  className="adv-search-link"
                                  >
                                  <Link>More details</Link>
                              </ExpandMore>
                            </Box>
                        </Box>

                        <Collapse className="sub-detail-holder" in={expanded} timeout="auto" unmountOnExit>
                          <Box display="flex" className="form">
                            
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය / දින පරාසය:</FormLabel>
                                <FormLabel>342342342</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය / දින පරාසය:</FormLabel>
                                <FormLabel>342342342</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය:</FormLabel>
                                <FormLabel>342342342</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය:</FormLabel>
                                <FormLabel>342342342</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධ්ය වූ දිනය / දින පරාසය:</FormLabel>
                                <FormLabel>342342342</FormLabel>
                            </FormControl>

                          </Box>
                        </Collapse>

                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            className="contexual-menu"
                          >
                          <MoreVertIcon />
                      </IconButton>
                      <Menu
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: '20ch',
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                              {option}
                            </MenuItem>
                          ))}
                      </Menu>
                    </div>
                    
                    <Box sx={{ width: '100%' }}>

                      <Box className="content-block tab-head" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="වින්දිතයන් පිළිබද විස්තර" {...a11yProps(0)} />
                          <Tab label="සැකකරුවන් පිළිබද විස්තර" {...a11yProps(1)} />
                          <Tab label="විමර්ෂණ පිළිබද විස්තර" {...a11yProps(2)} />
                          <Tab label="නඩු පිළිබද විස්තර" {...a11yProps(3)} />
                          <Tab label="නියෝග හා කාර්ය පැවරීම" {...a11yProps(4)} />
                          <Tab label="ක්‍රියාකාරීත්ව කාලරාමු සටහන" {...a11yProps(5)} />
                        </Tabs>
                      </Box>

                      <div className="content-block lower margin-t0"> 
                        <TabPanel value={value} index={0}>
                          <Typography variant="subtitle2">වින්දිතයන් පිළිබද විස්තර content goes here</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            
                            <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>                     
                                <Typography variant="h3" className="p-0">සැකකරුවන් පිළිබද විස්තර (4)</Typography> 
                                <Button color="secondary" variant="contained">නව සැකකරුවන් ඇතුලත් කිරීම</Button>
                            </Box>

                            <div className="inner-holder">
                              <Accordion expanded={expanded2 === 'panel1'} onChange={handleChangeAccordian('panel1')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                    <Avatar variant="square" alt="Name goes here" src={ ProfileImage } sx={{ width: '7rem', height: '7rem' }} />
                                    <div>
                                        <Typography variant="h3">දසනායක මුදියන්සලාගේ සමන්ත කුමාර දසනායක</Typography>
                                        <Typography variant="subtitle1">(සුදු පුතා/ කහවණු)</Typography>
                                       
                                        <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">                     
                                          <div>
                                              <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">    
                                                <Typography variant="subtitle2"><NumbersIcon />CRM-0001</Typography> 
                                                <Typography variant="subtitle2"><MaleIcon /> Male</Typography> 
                                                <Typography variant="subtitle2"><AccessibilityIcon /> 45yrs (12-12-1976)</Typography>
                                                <Typography variant="subtitle2"><BadgeIcon /> 7690014369V</Typography>
                                                <Typography variant="subtitle2"><PublicIcon /> N00079886754</Typography>
                                              </Box>

                                              <Box display="flex" sx={{ alignItems: 'center', marginTop: '.5rem' }} className="sub-detail">                     
                                                <Typography variant="subtitle2"><WorkOutlineIcon /> පෙදරේරු</Typography> 
                                              </Box> 
                                          </div>  
                                          <div className="sub-detail-right">
                                            <Typography variant="subtitle2"><FmdGoodOutlinedIcon /> 287/21, සමගි පුර මහල් නිවාස, නව නගරය, යාපනය</Typography> 
                                            <Typography variant="subtitle2"><CallOutlinedIcon /> 0773725702, 0112790069</Typography>
                                          </div>
                                        </Box>
                                        
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <hr />
                                    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>                     
                                      <Typography variant="h4" className="p-0">ළගම නආතීන් පිළිබද විස්තර</Typography> 
                                      <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                                    </Box>
                                    <TableContainer className="data-grid-holder">
                                      <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                          <TableHead>
                                            <TableRow style={{ verticalAlign: 'top' }}>
                                              <StyledTableCell>නම</StyledTableCell> 
                                              <StyledTableCell>ජා.හැ.අ</StyledTableCell>
                                              <StyledTableCell>දුරකථන අoකය</StyledTableCell>
                                              <StyledTableCell>ලිපිනය</StyledTableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                                <StyledTableRow style={{ verticalAlign: 'top' }}>
                                                    <TableCell>
                                                        Hiran Karunananda
                                                    </TableCell>
                                                    <TableCell>
                                                        852331740V
                                                    </TableCell>
                                                    <TableCell>
                                                        07745453332, 0112809475
                                                    </TableCell>
                                                    <TableCell>
                                                        104/3, Araliya Place, Thalahena, Malabe
                                                    </TableCell>
                                                </StyledTableRow>
                                          </TableBody>
                                      </Table>
                                    </TableContainer>

                                    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>                     
                                      <Typography variant="h4" className="p-0">පොලීසියට ඉදිරිපත් කිරීම</Typography> 
                                      <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                                    </Box>
                                    <TableContainer className="data-grid-holder">
                                      <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                          <TableHead>
                                            <TableRow style={{ verticalAlign: 'top' }}>
                                              <StyledTableCell>දිනය </StyledTableCell> 
                                              <StyledTableCell>තොරතුරු පොත</StyledTableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                                <StyledTableRow style={{ verticalAlign: 'top' }}>
                                                    <TableCell>
                                                        12-04-2021
                                                    </TableCell>
                                                    <TableCell>
                                                        GCB1- 20/200
                                                    </TableCell>
                                                </StyledTableRow>
                                          </TableBody>
                                      </Table>
                                    </TableContainer>

                                </AccordionDetails>
                              </Accordion>

                              <Accordion expanded={expanded2 === 'panel2'} onChange={handleChangeAccordian('panel2')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                    <Avatar variant="square" alt="Name goes here" src={ ProfileImage2 } sx={{ width: '7rem', height: '7rem' }} />
                                    <div>
                                        <Typography variant="h3">දසනායක මුදියන්සලාගේ සමන්ත කුමාර දසනායක</Typography>
                                        <Typography variant="subtitle1">(සුදු පුතා/ කහවණු)</Typography>
                                       
                                        <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">                     
                                          <div>
                                              <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">    
                                                <Typography variant="subtitle2"><NumbersIcon />CRM-0001</Typography> 
                                                <Typography variant="subtitle2"><MaleIcon /> Male</Typography> 
                                                <Typography variant="subtitle2"><AccessibilityIcon /> 45yrs (12-12-1976)</Typography>
                                                <Typography variant="subtitle2"><BadgeIcon /> 7690014369V</Typography>
                                                <Typography variant="subtitle2"><PublicIcon /> N00079886754</Typography>
                                              </Box>

                                              <Box display="flex" sx={{ alignItems: 'center', marginTop: '.5rem' }} className="sub-detail">                     
                                                <Typography variant="subtitle2"><WorkOutlineIcon /> පෙදරේරු</Typography> 
                                              </Box> 
                                          </div>  
                                          <div className="sub-detail-right">
                                            <Typography variant="subtitle2"><FmdGoodOutlinedIcon /> 287/21, සමගි පුර මහල් නිවාස, නව නගරය, යාපනය</Typography> 
                                            <Typography variant="subtitle2"><CallOutlinedIcon /> 0773725702, 0112790069</Typography>
                                          </div>
                                        </Box>
                                        
                                    </div>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <hr />
                                    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>                     
                                      <Typography variant="h4" className="p-0">ළගම නආතීන් පිළිබද විස්තර</Typography> 
                                      <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                                    </Box>
                                    <TableContainer className="data-grid-holder">
                                      <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                          <TableHead>
                                            <TableRow style={{ verticalAlign: 'top' }}>
                                              <StyledTableCell>නම</StyledTableCell> 
                                              <StyledTableCell>ජා.හැ.අ</StyledTableCell>
                                              <StyledTableCell>දුරකථන අoකය</StyledTableCell>
                                              <StyledTableCell>ලිපිනය</StyledTableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                                <StyledTableRow style={{ verticalAlign: 'top' }}>
                                                    <TableCell>
                                                        Hiran Karunananda
                                                    </TableCell>
                                                    <TableCell>
                                                        852331740V
                                                    </TableCell>
                                                    <TableCell>
                                                        07745453332, 0112809475
                                                    </TableCell>
                                                    <TableCell>
                                                        104/3, Araliya Place, Thalahena, Malabe
                                                    </TableCell>
                                                </StyledTableRow>
                                          </TableBody>
                                      </Table>
                                    </TableContainer>

                                    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>                     
                                      <Typography variant="h4" className="p-0">පොලීසියට ඉදිරිපත් කිරීම</Typography> 
                                      <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                                    </Box>
                                    <TableContainer className="data-grid-holder">
                                      <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
                                          <TableHead>
                                            <TableRow style={{ verticalAlign: 'top' }}>
                                              <StyledTableCell>දිනය </StyledTableCell> 
                                              <StyledTableCell>තොරතුරු පොත</StyledTableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                                <StyledTableRow style={{ verticalAlign: 'top' }}>
                                                    <TableCell>
                                                        12-04-2021
                                                    </TableCell>
                                                    <TableCell>
                                                        GCB1- 20/200
                                                    </TableCell>
                                                </StyledTableRow>
                                          </TableBody>
                                      </Table>
                                    </TableContainer>

                                </AccordionDetails>
                              </Accordion>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            විමර්ෂණ පිළිබද විස්තර content goes here
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            නඩු පිළිබද විස්තර content goes here
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            නියෝග හා කාර්ය පැවරීම content goes here
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            ක්‍රියාකාරීත්ව කාලරාමු සටහන content goes here
                        </TabPanel>
                      </div>

                    </Box>
                </Grid>
            </Grid>
        </Container>
        )
    }

export default GCRDetail;
