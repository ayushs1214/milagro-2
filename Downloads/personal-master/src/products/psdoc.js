import React from 'react';
import './index1.css';
function Table() {
const data3 = [
        {  name: 'Identity Proof', value: 'PAN/Aadhaar card, Voter’s ID, passport, driving licence' },
        {  name: 'Proof of Residence', value: 'Voter’s ID, Aadhaar card, passport, driving licence, electricity bill, telephone bill' },
        {  name: 'Income Proof', value: 'Bank statement or salary slips for the last three months' },
        {  name: 'Photographs', value: '2 passport-size photographs' },
    
      ];
return(
<div>
<div style={{
          background: "rgb(2,0,36)",
          background: "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#01668d',GradientType=1)"
      }}>
<h1 className="text" style={{ color: "white", textAlign: "center"}}>Documents Required</h1><br></br><br></br>
            <p style={{ color: "white", wordSpacing: "4px", marginLeft:"20px", paddingLeft:"50px", paddingRight:"50px"}}><center> To apply for a business loan from one of FinURL's lending partners, you must have the following documents:</center></p>
            <br></br><br></br>
            <center>
              <table>
                  <thead>
                      <tr>
                          <th>Document Requirement</th>
                          <th>Particulars</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data3.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table>
          </center>
          </div>
          </div>
)
}
function TableRow({ name, value }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    );
  }
export default Table;