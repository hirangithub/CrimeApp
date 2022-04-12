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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '0',
  transition: 'none'
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(index, date, name, rankAndNumber, telephone,informationBookDetails, officers, discoveredItems) {
  return {
    index,
    date,
    name, 
    rankAndNumber,    
    telephone,
    informationBookDetails,
    officers,
    discoveredItems
  };
}

const socoRows = [
  createData('00001', '03-04-2022', 'සමන් කුමාර','ASP - PS/10/01', '0773478734','GCIB 300/23', 
                  [{ 'officerRank': 'SI', 'officerNumber': 'PS/01/02/03', 'officerName' : 'අජිත් පෙරේරා', 'officerTelephone': '0073473623'},
                   { 'officerRank': 'SI', 'officerNumber': 'PS/01/02/03', 'officerName' : 'සමන් පෙරේරා', 'officerTelephone': '0073473623'}], 
                  [{'itemName': 'රත්රන් මාල ', 'value' : '234590'},
                   {'itemName': 'රුපවාහිනී', 'value' : '54875'}]),

  createData('00001', '03-04-2022', 'සුනිල් පතිරණ','ASP - PS/10/01', '0773478734','GCIB 200/23',  
                   [{ 'officerRank': 'SI', 'officerNumber': 'PS/01/02/03', 'officerName' : 'සමන් පෙරේරා', 'officerTelephone': '0073473623'},
                    { 'officerRank': 'SI', 'officerNumber': 'PS/01/02/03', 'officerName' : 'අජිත් පෙරේරා', 'officerTelephone': '0073473623'}], 
                   [{'itemName': 'රත්රන් මාල ', 'value' : '234590'},
                    {'itemName': 'රුපවාහිනී', 'value' : '54875'}]),
];


function SocoRows(props) {
  const { row } = props;
  const [open1, setOpen1] = React.useState(false);

  return (
    <React.Fragment>
        {socoRows.map((row) => (
          <SocoRow key={row.index} row={row} />
        ))}
    </React.Fragment>
  );
}

function SocoRow(props) {
  const { row } = props;
  const [open1, setOpen1] = React.useState(false);

  return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen1(!open1)}
              >
                {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>       
            <TableCell component="th" scope="row">
              {row.index}
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.rankAndNumber}</TableCell>
            <TableCell>{row.telephone}</TableCell>
            <TableCell>{row.informationBookDetails}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="inner-table" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <Box sx={{ display: 'flex' }} className="inner-table-column">
                      <Item>
                      <h4>සහාය වූ නිලධරයන් පිළිබඳ විස්තරය</h4>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          {/* <TableRow>
                            <TableCell colSpan={4}>සහාය වූ නිලධරයන් පිළිබඳ විස්තරය</TableCell>                        
                          </TableRow> */}
                          <TableRow>
                            <TableCell>නිලය</TableCell>
                            <TableCell>නිල අංකය</TableCell>
                            <TableCell>නම</TableCell>
                            <TableCell>දුරකථන අංකය</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.officers.map((officerRow) => (
                            <TableRow key={officerRow.officerNumber}>
                              <TableCell component="th" scope="row">
                                {officerRow.officerRank}
                              </TableCell>
                              <TableCell>{officerRow.officerNumber}</TableCell>
                              <TableCell>{officerRow.officerName}</TableCell>
                              <TableCell>{officerRow.officerTelephone}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                  </Item>
                  <Item>
                    <h4>සොයා ගන්නා ලද නඩු භාණ්ඩ පිළිබඳ විස්තරය</h4>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        {/* <TableRow>
                          <TableCell colSpan={4}>සහාය වූ නිලධරයන් පිළිබඳ විස්තරය</TableCell>                        
                        </TableRow> */}
                        <TableRow>
                          <TableCell>භාණ්ඩය</TableCell>
                          <TableCell>වටිනාකම </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.discoveredItems.map((itemRow) => (
                          <TableRow key={itemRow.itemName}>
                            <TableCell component="th" scope="row">
                              {itemRow.itemName}
                            </TableCell>
                            <TableCell>{itemRow.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Item>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>    
        </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default SocoRows;