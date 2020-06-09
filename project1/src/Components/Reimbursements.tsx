import React, { Component } from "react";
import { Link } from "react-router-dom";
import { submitReimbursement } from "../api/infoClient";

export class Reimbursements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      description: "",
      type: "",
    };
  }

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReimbursement = await submitReimbursement(
        this.state.amount,
        this.state.description,
        this.state.type
      );
      this.props.updateReimbursements();
      console.log("this is patched reimbursement: ", newReimbursement);
    } catch (e) {
      console.error(e.message);
    }
  };

  render() {
    if (this.props.user()) {
      return (
        <div>
          {/* <h2 className="title">Complete New Reimbursement</h2> */}
          <Link className="modified" to="/home">
            Home
          </Link>
          <div class="form-style-5">
            <form onSubmit={this.handleSubmit}>
              <span>
                <h1>New Reimbursement</h1>
              </span>
              <fieldset>
                <legend>
                  <span class="number">*</span>Fill out to submit
                </legend>
                <input
                  onChange={this.handleAmountChange}
                  type="text"
                  name="Amount"
                  placeholder="Amount"
                />
                <input
                  onChange={this.handleDescriptionChange}
                  type="text"
                  name="Description"
                  placeholder="Description"
                />
                <input
                  onChange={this.handleTypeChange}
                  type="text"
                  name="Type"
                  placeholder="Type"
                />
              </fieldset>
              <h4>Type Legend:</h4>
              <div>1: Lodging </div>
              <div>2: Travel </div>
              <div>3: Food </div>
              <div>4: Other </div>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
          {/* <form className="formArea" onSubmit={this.handleSubmit}>
            {" "}
            <input
              onChange={this.handleAmountChange}
              type="text"
              name="Amount"
              placeholder="Amount"
            />
            <input
              onChange={this.handleDescriptionChange}
              type="text"
              name="Description"
              placeholder="Description"
            />
            <input
              onChange={this.handleTypeChange}
              type="text"
              name="Type"
              placeholder="Type"
            />
            <input type="submit" value="submit" />
          </form> */}
        </div>
      );
    } else {
      return (
        <>
          <div>Please login to submit a reimbursement</div>
          <Link to="/">Login</Link>
        </>
      );
    }
  }
}

export default Reimbursements;
