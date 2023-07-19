import React, { useState } from "react";
import { withStyles, withTheme } from "@material-ui/core";
import  Slider  from "@material-ui/core/Slider";
import  Typography  from "@material-ui/core/Typography";
import { Table, TableCell, TableRow } from "@material-ui/core";
// import { Pie } from "react-chartjs-2";
import TableDetails from "./TableDetails";
import './calci.css';
const PrettoSlider = withStyles({
    root: {color:"navy blue", height: 10},
    thumb: {height: 25, width: 25, backgroundColor: 'white', border: '3px solid black', marginTop: -9, marginLeft: -9 },
    track: {height: 10, borderRadius: 4},
    rail: {height: 10, borderRadius: 4},
})(Slider);

function Calculator(){
    const[pAmount, setAmount] = useState(2755000);
    const[interest, setInterest] = useState(7);
    const[duration, setDuration] = useState(147);
    const maxValue = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1/(1 + intr), duration)))) : 0;
    const totalAmt = duration * emi
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);
    return(
        
        <div className="App">
            <div className="CalApp">
                <h2 className="CalHeading">EMI calculator</h2>
                <div className="meet" style={{color:"whitesmoke"}}>
                    <Typography  gutterBottom><strong>Loan Amount</strong></Typography>
                    <PrettoSlider value={pAmount} onChange={(event, vAmt) => {setAmount(vAmt)}} defaultValue={pAmount} max={maxValue}  />
                </div>
                <div className="meet" style={{color:"whitesmoke"}}>
                    <Typography gutterBottom><strong>Interest Rate</strong></Typography>
                    <PrettoSlider value={interest} onChange={(event, vInt) => {setInterest(vInt);}} defaultValue={interest} max={intMax}  />
                </div>
                <div className="meet" style={{color:"whitesmoke"}}>
                    <Typography gutterBottom><strong>Tenure (Months)</strong></Typography>
                    <PrettoSlider value={duration} onChange={(event, vDur) => {setDuration(vDur);}} defaultValue={duration} max={maxDuration}  />
                </div>
            </div>
            <div>
            <Table style={{width:'100%', border:'black', borderColor:"black"}}>
                <TableRow >
                    <TableCell style={{width:'100%', border:'black', borderColor:"black"}}>
                        <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} ></TableDetails>
                    </TableCell>
                </TableRow>
            </Table>
            </div>
        </div>
    )
}
    
export default Calculator;