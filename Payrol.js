import React, { useState } from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'




const Payrol = () => {
const [basicsalary, setbasicsalary] = useState(0);
const [overtime, setovertime] = useState(0);
const [allowance, setallowance] = useState(0);
const [deduct, setdeduct] = useState(0);
const [incometax,setincometax] = useState(0);
const [pension, setpension] = useState(0);
const [netsalary,setnetsalary] = useState(0);
    const takebasicsalary=(e)=>{
        setbasicsalary(e.target.value);
    }
    const takeovertime=(e)=>{
        setbasicsalary(e.target.value);
    }
    const takeallowance=(e)=>{
        setbasicsalary(e.target.value);
    }
    const takededuct=(e)=>{
        setbasicsalary(e.target.value);
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        setpension(basicsalary*0.07);
        if(basicsalary<=600) setincometax(0);
        else if(1650>=basicsalary) setincometax(basicsalary*0.1-60);
        else if(3200>=basicsalary) setincometax(basicsalary*0.15-142.5);
        else if(5250>=basicsalary) setincometax(basicsalary*0.2-302.5);
        else if(7800>=basicsalary) setincometax(basicsalary*0.25-565);
        else if(10900>=basicsalary) setincometax(basicsalary*0.3-955);
        else if(basicsalary>10900) setincometax(basicsalary*0.35-1500);

        setnetsalary(parseInt(basicsalary) +parseInt(allowance) +parseInt(overtime) -parseInt(incometax) -parseInt(pension) -parseInt(deduct));
    }

  return (
    <div className='payrol'>
        <h1>Payrol System</h1>
        <form onSubmit={handlesubmit}>
            <label>Basic Salary </label>
            <input id='in' type='text' placeholder='Basic Salary' onChange={takebasicsalary}/><br/>
            <label> Overtime    </label>
            <input id='in' type='text' placeholder=' Overtime' onChange={takeovertime}/><br/>
            <label> Allowance  </label>
            <input id='in' type='text' placeholder=' Allowance' onChange={takeallowance}/><br/>
            <label> Deduction  </label>
            <input id='in' type='text' placeholder=' Deduction' onChange={takededuct}/><br/>
            <input id='b' type='submit' value={"Submit"} />
            <input id='b1' type='reset' value={"Clear"} />

            <h1 id='h10'>Net Salary : {netsalary}</h1>
            <NavLink to="/"><input id='b3'  type='submit' value={"Back"}/></NavLink>
            

        </form>

        
    </div>
  )
}

export default Payrol