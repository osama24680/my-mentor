import React from "react";
import { Col, Row } from "react-bootstrap";
import { LocalStorageSave } from "../../Custom Hooks/LocalStorage";
import { AiFillPlusSquare } from "react-icons/ai";

const MentoringRequest = () => {
  const x = ()=>{
    var Paid_value = document.getElementById("Paid").checked;

    // For Enable Amount and Currency on Change Paid
    var Amount = document.getElementById("Amount");
    var currency = document.getElementById("currency");

    if(Paid_value){
      Amount.removeAttribute("disabled")
      currency.removeAttribute("disabled")
    }
  }
  const handle = ()=>{
    LocalStorageSave()
    
  }
  return (
    <div className="MentoringRequest">
      <h4 className="MentoringRequest_Title">Mentoring Request</h4>
      <form action="" className="MentoringRequest_Inputs">
        <label htmlFor="title">Mentoring Request Title</label>
        <br />
        <input type="text" name="" id="title" placeholder="example"  autoComplete="off" />
        <label htmlFor="Description">Request Description</label>
        <br />
        <input type="text" name="" id="Description" placeholder="example"  autoComplete="off"/>
        <Row>
          <Col className="col-md-6 col-12">
            <label htmlFor="location">Location</label>
            <select name="" id="location">
              <option value="Remote">Remote</option>
              <option value="Remote">Remote</option>
              <option value="Remote">Remote</option>
            </select>
          </Col>

          <Col className="col-md-6 col-12">
            <label htmlFor="duration">Duration</label>
            <select name="" id="duration">
              <option value="Remote">3 Months</option>
              <option value="Remote">3 Months</option>
              <option value="Remote">3 Months</option>
            </select>
          </Col>

          <Col className="col-md-6 col-12">
            <label htmlFor="experince">Experince</label>
            <select name="" id="experince">
              <option value="Remote">None</option>
              <option value="Remote">None</option>
              <option value="Remote">None</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-2 col-12">
            <label htmlFor="Paid">Paid</label>
            <input type="radio" name="" id="Paid" value="" onChange={x}/>
          </Col>

          <Col className="col-md-6 col-12 ">
            <label htmlFor="Amount">Amount</label>
            <br />
            <input type="text" name="" id="Amount" placeholder="example"  autoComplete="off" disabled/>
          </Col>

          <Col className="col-md-4 col-12">
            <label htmlFor="currency">Currency</label>
            <br />
            <select name="" id="currency" disabled>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
            </select>
          </Col>
        </Row>
        <label htmlFor="last_input_1">I'm Looking For Help With</label>
        <br />
        <input type="text" name="" id="last_input_1" placeholder="example"  autoComplete="off" /><AiFillPlusSquare /> <br />
        <label htmlFor="last_input_2">Requirements</label>
        <br />
        <input type="text" name="" id="last_input_2" placeholder="example"   autoComplete="off"/><AiFillPlusSquare /> <br />
        <label htmlFor="last_input_3">I Have A Background About</label>
        <br />
        <input type="text" name="" id="last_input_3" placeholder="example"  autoComplete="off"/><AiFillPlusSquare /><br />
        <button type="submit" onClick={handle}>Publish</button>
      </form>
    </div>
  );
};

export default MentoringRequest;
