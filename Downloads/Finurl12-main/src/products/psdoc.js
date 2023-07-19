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
<div >
<h1 className="psloan" style={{  textAlign: "center"}}>Documents Required</h1> <br />
            <p className="ps text-white"><center> You will need the following documents to get a personal loan through a lending partner of Bajaj Markets:</center></p>
            <br></br><br></br>
             <div className="table-container overflow-x-auto">
            <center>  <div className='table1'> <table className="text-white">
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
              </table >
               </div>
              </center>
              </div>
          
          </div>
          </div>
)
}
function TableRow({ name, value }) {
    return (
      <tr>
        <td className='colu1'>{name}</td>
        <td className='colu1'>{value}</td>
      </tr>
    );
  }
export default Table;