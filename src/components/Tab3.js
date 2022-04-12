import React from 'react';
import { Button, Box, Typography, FormControl, FormLabel, Link, Dialog, AppBar, Toolbar, Slide } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import StatementRows from './StatementRows';
import SocoRows from './SocoRows';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '0',
  transition: 'none'
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(name, calories, fat, carbs, protein, name2, date1) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    name2,
    date1,
    history: [
      {
        date: 'Wimal Desilva',
        customerId: 'නැත',
        amount: 3,
      },
      {
        date: 'Harsha Thilakorala',
        customerId: 'ඇත',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open1, setOpen1] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen1(!open1)}>
            {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
        <TableCell>{row.name2}</TableCell>
        <TableCell>{row.date1}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="inner-table" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <Box>
              {/* <h3>Sub title goes here</h3> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>හඳුනා ගැනීමේ පෙරෙට්ටුවට ඉදිරිපත් කළ සැකකරු / සැකකරුවන්ගේ නම්</TableCell>
                    <TableCell>සාක්‍ෂිකරු විසින් එක් එක් සැකකරුව හඳුනා ගත්තේ ද නැද්ද යනවග</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('001112', 'Chaminda Sooriyaperuma', '104/3, Araliya Place, Thalahena, Malabe', 'as/12/12', 'ABC Perera,ASP,AS/01/01', 'K.W.Karunananda', '02-04-2021'),
  createData('001113', 'Chaminda Sooriyaperuma', '23/C, Araliya Place, Thalahena, Malabe', 'as/12/12', 'ABC Perera,ASP,AS/01/01', 'K.W.Karunananda', '02-04-2021'),
  createData('001114', 'Chaminda Sooriyaperuma', '12/B, Thalahena, Malabe', 'as/12/12', 'ABC Perera,ASP,AS/01/01', 'K.W.Karunananda', '02-04-2021'),
  createData('001115', 'Chaminda Sooriyaperuma', '104/3, Malabe', 'as/12/12', 'ABC Perera,ASP,AS/01/01', 'K.W.Karunananda', '02-04-2021'),
  createData('001116', 'Chaminda Sooriyaperuma', '104/3, Araliya Place, Thalahena, Malabe', 'as/12/12', 'ABC Perera,ASP,AS/01/01', 'K.W.Karunananda', '02-04-2021'),
];

const Tab3Content = () => {

    {/* Popup show/hide state */}    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  
    const [openStatement, setOpenStatement] = React.useState(false);
    const handleClickOpenStatement = () => {
        setOpenStatement(true);
    };
    const handleStatementClose = () => {
        setOpenStatement(false);
    };

    const [openSoco, setOpenSoco] = React.useState(false);
    const handleClickOpenSoco = () => {
      setOpenSoco(true);
    };
    const handleSocoClose = () => {
      setOpenSoco(false);
    };

    return (             
        <div>
            {/* <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>                     
                <Typography variant="h3" className="p-0">විමර්ෂණ පිළිබද විස්තර</Typography> 
                <Button color="secondary" variant="contained">නව විමර්ෂණ ඇතුලත් කිරීම</Button>
            </Box> */}

            <div className="inner-holder">
              <Box display="flex" className="form pm-0">
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">විමර්ශනය ආරම්භ කල දිනය:</FormLabel>
                    <FormLabel>01-02-2020</FormLabel>
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">විමර්ශනය ආරම්භ කළ දින සිට එය අවසන් කිරීම දක්වා ගත වූ කාලය:</FormLabel>
                    <FormLabel>--</FormLabel>
                </FormControl>
              </Box>

              <div className="menu-options">
                <Link onClick={handleClickOpenStatement}>ප්‍රකාශ සටහන් කිරීම</Link>
                <Link onClick={handleClickOpenSoco}>සොකෝ නිලධරයන් කැඳවීම</Link>
                <Link href="#">නිල සුනඛයන් කැඳවීම</Link>
                <Link href="#">විමර්ශන කළ නිලධරයන් සහ අධීක්‍ෂණ නිලධරයන් අපරාධ ස්ථාන පරීක්‍ෂා කිරීම පිළිබඳ විස්තරය</Link>
                <Link href="#">මුල් තොරතුරට අදාලව ජ්‍යෙෂ්ඨ රාජ්‍ය නිවේදිත නිලධරයන් විසින් ලබාදෙන විමර්ශන නියෝග</Link>
                <Link href="#">අපරාධ ස්ථානයට ඇ.ස.රෙ. නිලධරයන් කැඳවීම</Link>
                <Link onClick={handleClickOpen}>හඳුනා ගැනීමේ පෙරෙට්ටු පැවැත්වීම පිළිබද විස්තරය</Link>
                <Link href="#">අත්අඩංගුවට ගන්නා ලද නඩු භාණ්ඩ පිළිබඳ විස්තර</Link>
                <Link href="#">සැකකරුවන්ගේ ඇඟිලි සලකුණු ඇ.ස.රෙ. වෙත සහ ක්‍රමවිධි ආකෘතිපත්‍ර අපරාධ ලේඛනාගාරය වෙත යොමු කිරීම සම්බන්ධව</Link>
                <Link href="#">සැකකරුවන් රඳවා තබා ගැනීමේ නියෝග ලබා ගත්තේ නම් ඒ පිළිබඳ විස්තර</Link>
              </div>
            </div>

            {/* Popup content starts here */}                            
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className="entry-popup">
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
                        <Typography variant="h3" className="p-0">
                            හඳුනා ගැනීමේ පෙරෙට්ටු පැවැත්වීම පිළිබද විස්තරය									
                        </Typography>
                        {/* <Button autoFocus variant="outlined" onClick={handleClose}>Save changes</Button> */}
                        <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                    </Toolbar>
                </AppBar>
                                     
                <div className="popup-container">
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow>
                          <TableCell />
                          <TableCell>අනු අංකය</TableCell>
                          <TableCell>හඳුනා ගැනීමේ පෙරෙට්ටුවට ඉදිරිපත් කළ සාක්‍ෂිකරුගේ නම</TableCell>
                          <TableCell>ලිපිනය</TableCell>
                          <TableCell>උසාවි භාර නිලධාරියාගේ නම, නිලය හා නිල අංකය</TableCell>
                          <TableCell>සාක්‍ෂිකරු භාරව සිටි නිලධරයාගේ නම, නිලය හා නිල අංකය</TableCell>
                          <TableCell>හඳුනා ගැනීමේ පෙරට්ටුව පැවැත්වූ මහේස්ත්‍රාත්ගේ නම</TableCell>
                          <TableCell>හඳුනා ගැනීමේ පෙරෙට්ටුව පැවැත්වූ දිනය</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <Row key={row.name} row={row} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
            </Dialog>            

            {/* Popup content starts here */}                            
            <Dialog
                fullScreen
                open={openStatement}
                onClose={handleStatementClose}
                TransitionComponent={Transition}
                className="entry-popup">
                <AppBar sx={{ position: 'relative' }} className="toolbar-popup" position="sticky">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleStatementClose}
                        aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h3" className="p-0">
                          ප්‍රකාශ සටහන් කිරීම පිළිබද විස්තරය									
                        </Typography>
                        {/* <Button autoFocus variant="outlined" onClick={handleStatementClose}>Save changes</Button> */}
                        <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                    </Toolbar>
                </AppBar>
                                     
                <div className="popup-container">
                  
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow> 
                          {/* <TableCell rowSpan='2'/> */}
                          <TableCell rowSpan='2'>අනු අංකය</TableCell>
                          <TableCell rowSpan='2'>දිනය</TableCell>
                          <TableCell rowSpan='2'>ප්‍රකාශය සටහන් කළ තැනැත්තාගේ නම</TableCell>                          
                          <TableCell rowSpan='2'>ලිපිනය</TableCell>
                          <TableCell rowSpan='2'>දුරකථන අංකය</TableCell>
                          <TableCell rowSpan='2'>ජාතික හැඳුනුම්පත් අංකය</TableCell>
                          <TableCell rowSpan='2'>විදේශ ගමන් බලපත්‍ර අංකය</TableCell>
                          <TableCell align="center" colSpan='4'>ප්‍රකාශය සටහන් කළ නිලධාරියා පිළිබඳ විස්තරය</TableCell>
                          <TableCell rowSpan='2'>Last column</TableCell>
                        </TableRow>
                        <TableRow>                         
                          <TableCell>නිලය</TableCell>
                          <TableCell>නිල අංකය</TableCell>
                          <TableCell>නම</TableCell>
                          <TableCell>දුරකථන අංක</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <StatementRows></StatementRows>
                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
            </Dialog>

            {/* Popup content starts here */}                            
            <Dialog
                fullScreen
                open={openSoco}
                onClose={handleSocoClose}
                TransitionComponent={Transition}
                className="entry-popup">
                <AppBar sx={{ position: 'relative' }} className="toolbar-popup" position="sticky">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleSocoClose}
                        aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h3" className="p-0">
                          සොකෝ නිලධරයන් කැඳවීම
                        </Typography>
                        {/* <Button autoFocus variant="outlined" onClick={handleSocoClose}>Save changes</Button> */}
                        <Button color="secondary" variant="outlined"><AddCircleOutlineOutlinedIcon sx={{ marginRight: '.3rem' }} /> නව ඇතුලත් කිරීම</Button>
                    </Toolbar>
                </AppBar>
                                     
                <div className="popup-container">
                  
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow> 
                          <TableCell/>
                          <TableCell rowSpan='2'>අනු අංකය</TableCell>
                          <TableCell rowSpan='2'>කැඳවන ලද දිනය</TableCell>
                          <TableCell rowSpan='2'>සොකෝ නිලධරයාගේ නම</TableCell>                          
                          <TableCell rowSpan='2'>නිලය / නිල අංකය</TableCell>
                          <TableCell rowSpan='2'>දුරකථන අංකය</TableCell>
                          <TableCell rowSpan='2'>තොරතුරු පොතේ නම, පිටුව හා ඡේදය</TableCell>                          
                        </TableRow>                        
                      </TableHead>
                      <TableBody>
                        <SocoRows></SocoRows>
                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
            </Dialog>
        </div> 

    )
  }


export default Tab3Content;