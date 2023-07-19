import React from 'react'
import './index.css';
import { Table, TableCell, TableRow, TableHead } from "@material-ui/core";
function TableDetails(props) {
  return (
    <div >
    <Table  >
        <TableHead style={{width:'100%'}}>
            <TableRow style={{width:'100%', border:'black', borderColor:"black"}}>
                <TableCell className='ETableCellText' ><strong>Loan Amount</strong></TableCell>
                <TableCell className='ETableCellVal'style={{color:"white"}}><strong>Rs </strong>{props.pAmount}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Interest</strong></TableCell>
                <TableCell className='ETableCellVal'style={{color:"white"}}>{props.interest}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText' ><strong>Tenure (Months)</strong></TableCell>
                <TableCell className='ETableCellVal' style={{color:"white"}}>{props.duration}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>EMI (Monthly)</strong></TableCell>
                <TableCell className='ETableCellVal'style={{color:"white"}}><strong>Rs </strong>{props.emi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'><strong>Total Interest</strong></TableCell>
                <TableCell className='ETableCellVal'style={{color:"white"}}><strong>Rs </strong>{props.TotalAmountOfInterest}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'style={{color:"white"}}><strong>Total Payment</strong><br />(Loan Amount + Interest)</TableCell>
                <TableCell className='ETableCellVal'style={{color:"white"}}><strong>Rs </strong>{props.totalAmt ? props.totalAmt : 0}</TableCell>
            </TableRow>
        </TableHead>
    </Table>
    </div>
  )
}

export default TableDetails;