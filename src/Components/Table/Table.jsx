import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// importing the styles
import './Table.scss'
import { useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(1)': {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const Records = ({products}) => {

  // const [highlight, setHighlight] = useState(false)

  // const Toggle = (e) => {
  //   e.currentTarget()
  //   setHighlight(!highlight)
  //   console.log(highlight);
  // }

  
  return (

    <div className='table'>
        <p className="records">Records</p>
        <TableContainer component={Paper} className='for_overflow'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">

                <TableHead >
                    <TableRow >
                        <StyledTableCell className='table_head'>PRODUCT ID</StyledTableCell>
                        <StyledTableCell align="left" className='table_head'>PRODUCT NAME</StyledTableCell>
                        <StyledTableCell align="left" className='table_head'>PRODUCT QUANTITY</StyledTableCell>
                        <StyledTableCell align="left" className='table_head'>PRODUCT CATEGORY</StyledTableCell>
                        <StyledTableCell align="left" className='table_head'>PRODUCT PRICE</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                      {/* <StyledTableCell cosmponent="th" scope="row">1</StyledTableCell>
                    <StyledTableRow >
                      <StyledTableCell align="left">Bread</StyledTableCell>
                      <StyledTableCell align="left">12</StyledTableCell>
                      <StyledTableCell align="left">Flour</StyledTableCell>
                      <StyledTableCell align="left">12,000</StyledTableCell>
                    </StyledTableRow> */}

                    {products.map((item)=>{
                      const {id, title, quantity} = item

                      return (
                      
                        <StyledTableRow 
                          key={id} 
                          className='tableRow' 
                          onClick={(e)=>{e.currentTarget.classList.add('highlighted')}}
                          onDoubleClick={(e)=>{e.currentTarget.classList.remove('highlighted')}}
                        >  
                          <StyledTableCell component="th" scope="row" className='id'>{id}</StyledTableCell>
                          <StyledTableCell align="left" className='product_name'>{title}</StyledTableCell>
                          <StyledTableCell align="left" className='product_quantity'>{quantity}</StyledTableCell>
                          <StyledTableCell align="left" className='product_quantity'>DEFAULT</StyledTableCell>
                          <StyledTableCell align="left" className='product_price'>{title}</StyledTableCell>
                        </StyledTableRow>
                      
                      )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
export default Records

// className={highlight ? 'tableRow highlighted' : 'tableRow'} onClick={Toggle}