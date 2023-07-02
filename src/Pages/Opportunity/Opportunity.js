import { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import './Opportunity.css';

const Opportunity = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [cer, setCer] = useState('');
    const [dur, setDur] = useState('');
    const [loc, setLoc] = useState('');
    const [hire, setHire] = useState(false);
    const [paid, setPaid] = useState(false);
    const [curr, setCurr] = useState('');
    const [amount, setAmount] = useState('');
    const [resp, setResp] = useState('');
    const [req, setReq] = useState('');
    const [out, setOut] = useState('');

    const formSubmit = (e)=>{
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        const user = {
            Title :   title ,
            Description :   desc ,
            Certificate :   cer ,
            Duration :   dur ,
            Location :   loc ,
            Hired :   hire ,
            Paid :   paid ,
            Currency :   curr ,
            Amount :   amount ,
            Responsibility :   resp ,
            Requirement :   req ,
            Outcome :   out ,
        };
        localStorage.setItem("users" ,JSON.stringify( [...users , user]));
        console.log(JSON.parse(localStorage.getItem("users")));
    };
    return (
        <div className="container p-0 my-3">
            <div className="row">
                <h4 className="title p-2 col-sm-12 col-md-5 col-lg-4 ms-auto me-md-3 text-center text-md-end">Mentoring opportunity</h4>
            </div>
            <form className="m-3 p-3" onSubmit={formSubmit} >
                <div className="row mb-3">
                    <label for="title" className="form-label ms-md-2">Mentoring opportunity title</label>
                    <input type="text" className="col-sm-12 col-md-6 ms-2" id="title" placeholder="example" name="title" required onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className="mb-3 d-none d-sm-block">
                    <label for="desc" className="form-label ms-md-2">Opportunity Description</label>
                    <input type="text" className="d-block w-100" id="desc" placeholder="example" name="desc" required onChange={(e)=>setDesc(e.target.value)} value={desc}/>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col-sm-12 col-md-2">
                        <label for="cer" className="form-label ms-md-2">Certificate</label>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2">
                        <select className="d-block w-100 mb-3 mb-md-0" id="cer" name="Certificate" required onChange={(e)=>setCer(e.target.value)} checked={cer}>
                            <option value="none" selected disabled hidden>Select :---</option>
                            <option value="Awarded-1">Awarded-1</option>
                            <option value="Awarded-2">Awarded-2</option>
                            <option value="Awarded-3">Awarded-3</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-2 text-md-center">
                        <label for="dur" className="form-label mb-3 mb-md-0">Duration</label>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2">
                        <select className="d-block w-100 mb-3 mb-md-0" id="dur" name="Duration" required onChange={(e)=>setDur(e.target.value)} checked={dur}>
                            <option value="none" selected disabled hidden>Select :---</option>
                            <option value="3-months" >3 months</option>
                            <option value="4-months">4 months</option>
                            <option value="5-months">5 months</option>
                        </select>
                    </div>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col-sm-12 col-md-2">
                        <label for="loc" className="form-label ms-md-2">Location</label>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2">
                        <select className="d-block w-100 mb-4 mb-md-0" id="loc" name="Location" required onChange={(e)=>setLoc(e.target.value)} checked={loc}>
                            <option value="none"selected disabled hidden>Select :---</option>
                            <option value="Remote">Remote</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-6 ms-lg-4">
                        <div className="d-flex">
                            <label className="form-check-label ms-md-2" for="check1">Might get hired</label>
                            <input className="form-check-input ms-auto ms-md-3" type="checkbox" value="true" id="check1" onChange={(e)=>setHire(e.target.value)} checked={hire}/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col-12 col-md-2">
                        <div className="d-flex mb-3">
                            <label className="form-check-label ms-md-2" for="check2">paid</label>
                            <input className="form-check-input ms-auto ms-md-3" type="checkbox" value="true" id="check2" onChange={(e)=>setPaid(e.target.value)} checked={paid} />
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="mb-3">
                            <label for="amount" className="form-label">Amount</label>
                            <input type="text" className="d-block w-100" id="amount" placeholder="example" required onChange={(e)=>setAmount(e.target.value)} value={amount}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 m-0 ms-md-3">
                        <div className="mb-3">
                            <label for="curr" className="form-label">Currency</label>
                            <select className="d-block w-100" id="curr" name="Currency" required onChange={(e)=>setCurr(e.target.value)} checked={curr}>
                                <option value="none" selected disabled hidden>Select :---</option>
                                <option value="USD">USD</option>
                                <option value="EGP">EGP</option>
                                <option value="EUR">EUR </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="resp" className="form-label ms-md-2">Responsibilities</label>
                    <div className="d-flex">
                        <input type="text" className="col col-sm-7 ps-3" id="resp" placeholder="example" name="resp" required onChange={(e)=>setResp(e.target.value)} value={resp}/>
                        <FaPlusSquare className='ms-2 mt-3 mt-sm-0' />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="req" className="form-label ms-md-2">Requirements</label>
                    <div className="d-flex">
                        <input type="text" className="col col-sm-7 ps-3" id="req" placeholder="example" name="req" required onChange={(e)=>setReq(e.target.value)} value={req}/>
                        <FaPlusSquare className='ms-2 mt-3 mt-sm-0' />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="out" className="form-label ms-md-2">Expected Outcome</label>
                    <div className="d-flex">
                        <input type="text" className="col col-sm-7 ps-3" id="out" placeholder="example" name="out" required onChange={(e)=>setOut(e.target.value)} value={out}/>
                        <FaPlusSquare className='ms-2 mt-3 mt-sm-0' />
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <button type='submit' className="butn col-sm-12 col-md-2 col-lg-1 ms-auto me-lg-4">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default Opportunity