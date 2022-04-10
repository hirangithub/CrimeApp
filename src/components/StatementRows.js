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

function createData(index, date, name, address, telephone, nic, passport, officerRank, officerNumber, officerName, officerTelephone) {
  return {
    index,
    date,
    name, 
    address,
    telephone,
    nic,
    passport,
    officerRank,
    officerNumber,
    officerName,
    officerTelephone
  };
}

const statementRows = [
  createData('00001', '03/04/2022', 'සමන් කුමාර','123/4 ජේතවන පාර, කොල්ලුපිටිය', '0773478734', '878787878V', 'N0000091919', 'SI', 'PS/01/02/03','අජිත් පෙරේරා', '0073473623'),
  createData('00002', '05/06/2021','සුනිල් පතිරණ',  '123/4 222/3 ආසිරි උයන, බම්බලපිටිය', '0773123223', '222222222V', 'N0000011123', 'SI', 'PS/01/02/03','අජිත් පතිරණ', '0073473623'),
  createData('00003', '02/12/2021', 'කුමාර පෙරේරා', '123/4 ජේතවන පාර, කොල්ලුපිටිය', '0773343333', '333333333V', 'N0000094455', 'SI', 'PS/01/02/03','සුනිල් පෙරේරා', '0073473623'),
  createData('00004', '10/12/2021', 'සමන් පෙරේරා','123/4 ජේතවන පාර, කොල්ලුපිටිය', '0773111111', '444444444V', 'N0000044444', 'SI', 'PS/01/02/03','අජිත් පෙරේරා', '0073473623'),
];


function StatementRow(props) {
  const { row } = props;
  const [open1, setOpen1] = React.useState(false);

  return (
    <React.Fragment>
      {statementRows.map((row) => (
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen1(!open1)}
          >
            {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        <TableCell component="th" scope="row">
          {row.index}
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell>{row.telephone}</TableCell>
        <TableCell>{row.nic}</TableCell>
        <TableCell>{row.passport}</TableCell>
        <TableCell>{row.officerRank}</TableCell>
        <TableCell>{row.officerNumber}</TableCell>
        <TableCell>{row.officerName}</TableCell>
        <TableCell>{row.officerTelephone}</TableCell>
      </TableRow>
                        ))}
      

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

export default StatementRow;