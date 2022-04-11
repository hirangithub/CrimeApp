import React from 'react';
import { Container, Grid, FormControl, FormLabel, Box, Link, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Tab1Content from './Tab1';
import Tab2Content from './Tab2';
import Tab3Content from './Tab3';
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
                            <Typography variant="h3" sx={{ paddingBottom: '0' }}>34/2021: අංක 123/4 ජේතවන පාර, කොල්ලුපිටිය නිවසේ සිදුවූ මනුස්ස ඝාතනය</Typography> 
                            <Box display="flex" sx={{ alignItems: 'center' }} className="sub-detail">                     
                              <Typography variant="subtitle2">GC00001</Typography> 
                              <Typography variant="subtitle2"><FiberManualRecordIcon sx={{ width: '.5rem', height: '.5rem', opacity: '.7' }} /></Typography> 
                              <Typography variant="subtitle2">මනුෂ ඝාතනය</Typography> 
                              <Typography variant="subtitle2"><FiberManualRecordIcon sx={{ width: '.5rem', height: '.5rem', opacity: '.7' }} /></Typography> 
                              
                              <ExpandMore
                                  expand={expanded}
                                  onClick={handleExpandClick}
                                  aria-expanded={expanded}
                                  aria-label="advanced search"
                                  className="adv-search-link"
                                  >
                                  <Link>තවත් තොරතුරු</Link>
                              </ExpandMore>
                            </Box>
                        </Box>

                        <Collapse className="sub-detail-holder" in={expanded} timeout="auto" unmountOnExit>
                          <Box display="flex" className="form">                            
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධිය වූ දිනය හා වෙලාව:</FormLabel>
                                <FormLabel>01-02-2021 1640</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සිද්ධිය වූ ලිපිනය:</FormLabel>
                                <FormLabel>222/3 ආසිරි උයන, කදිරාන</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">ග්‍රා.නි.ව.:</FormLabel>
                                <FormLabel>කදිරාන උතුර</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">දේපලවල වටිනාකම:</FormLabel>
                                <FormLabel>රු 450,000</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">සොයාගත් දේපලවල වටිනාකම:</FormLabel>
                                <FormLabel>රු 150,000</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">තොරතුරු පොත:</FormLabel>
                                <FormLabel>GCIB 200/23</FormLabel>
                            </FormControl>
                          </Box>
                          <hr/>
                          <Box display="flex" className="form">                            
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">පැමිණිලිකරුගේ නම:</FormLabel>
                                <FormLabel>සමන් කුමාර</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">ලිපිනය:</FormLabel>
                                <FormLabel>123/4 ජේතවන පාර, කොල්ලුපිටිය </FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">වයස:</FormLabel>
                                <FormLabel>අවුරුදු 45</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">ස්ත්‍රී/පුරුෂ භාවය:</FormLabel>
                                <FormLabel>පුරුෂ</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">රැකියාව:</FormLabel>
                                <FormLabel>රියදුරු </FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">දුරකථන අංකය:</FormLabel>
                                <FormLabel>0777777777,0771111111</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">ජාතික හැඳුනුම්පත් අංකය:</FormLabel>
                                <FormLabel>222222222V</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">විදේශ ගමන් බලපත්‍ර අංකය:</FormLabel>
                                <FormLabel>N00000001</FormLabel>
                            </FormControl>
                            <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                                <FormLabel component="legend">වින්දිතයාට ඇති සම්බන්ධතාවය:</FormLabel>
                                <FormLabel>පියා</FormLabel>
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
                          {/* <Tab label="ක්‍රියාකාරීත්ව කාලරාමු සටහන" {...a11yProps(5)} /> */}
                        </Tabs>
                      </Box>

                      <div className="content-block lower margin-t0"> 
                        <TabPanel value={value} index={0}>
                          {/* <Typography variant="subtitle2">වින්දිතයන් පිළිබද විස්තර content goes here</Typography> */}
                          <Tab1Content />
                        </TabPanel>
                        <TabPanel value={value} index={1}>

                          <Tab2Content />

                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            
                            <Tab3Content />
                            
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
