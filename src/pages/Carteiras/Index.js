import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function createData(carteira, saldo, principaisAtivos) {
  return { carteira, saldo, principaisAtivos};
}

const rows = [
  createData('Mercado BTC', 20000, 'BTC, ADA'),
  createData('Binance', 5302, 'BTC, ETH'),
  createData('XP Investimentos', 262, 'PETR4, WEG3'),
];

console.log(rows)

function Carteiras() {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Carteira</TableCell>
              <TableCell align="right">Saldo</TableCell>
              <TableCell align="right">Principais ativos</TableCell>
              <TableCell align="right">Manejo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.carteira}
                </TableCell>
                <TableCell align="right">{row.saldo}</TableCell>
                <TableCell align="right">{row.principaisAtivos}</TableCell>
                <TableCell align="right">"Botões"</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default Carteiras;