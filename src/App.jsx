
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [balance,setBalance]=useState(0);
  const [pay,setPay]=useState(0);

  console.log(amount,discount);

  const calculate=(e)=>{
    if(amount==0||discount==0){
      alert("Please enter the values!")
    }
    else{
      const output=amount * (discount / 100);
      console.log(output);
      setBalance(output);
      const payamt=amount-output;
      setPay(payamt);

    }
    
  }
  const reset=(e)=>{
    setAmount(0);
    setDiscount(0);
    setPay(0);
    setBalance(0);
  }









  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
          <div className="header">
          <h1>DISCOUNT CALCULATOR</h1>
        </div>
        
        <div className="form">
          <form>
            <div className="input">
            <TextField id="outlined-basic"  value={amount||""}  onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
            <br />
            <TextField id="filled-basic"  value={discount||""}  onChange={(e)=>setDiscount(e.target.value)} label="Discount%" variant="filled" />
            
            </div>
            <div className="button">
            <Button variant="contained" onClick={e=>calculate(e)}>CALCULATE</Button>
            <Button variant="outlined" onClick={e=>reset(e)}>RESET</Button>
            </div>
          </form>
        </div>
        <div className="discount">
          <h5>Amount to pay:</h5>
          <h2>&#8377; {pay}</h2>
          <h5>You are saved:</h5>
          <h2>&#8377; {balance} </h2>
          
        </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
          
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
