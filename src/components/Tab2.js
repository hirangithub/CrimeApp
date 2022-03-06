import React from 'react';
import { Button, Box, Typography, TableRow, Table, TableHead, TableBody, TableContainer } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MaleIcon from '@mui/icons-material/Male';
import BadgeIcon from '@mui/icons-material/Badge';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import NumbersIcon from '@mui/icons-material/Numbers';
import PublicIcon from '@mui/icons-material/Public';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Avatar from '@mui/material/Avatar';
import ProfileImage from '../assets/p-1.jpg';
import ProfileImage2 from '../assets/p-2.jpg';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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

const Tab2Content = () => {
  
    const [expanded2, setExpanded2] = React.useState(false);
    const handleChangeAccordian = (panel) => (event, isExpanded) => {
      setExpanded2(isExpanded ? panel : false);
    };

    return (             
        <div>
            <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>                     
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
        </div> 

    )
  }


export default Tab2Content;