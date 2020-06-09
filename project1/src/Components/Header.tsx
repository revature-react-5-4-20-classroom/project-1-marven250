import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { patchReimbursement } from "../api/infoClient";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reimbursementId: 0,
    };
  }

  logout = () => {
    console.log("in logout func");
    this.props.updatePage();
  };

  handleIdChange = (e) => {
    this.setState({
      reimbursementId: e.target.value,
    });
  };

  approveReimbursement = async (e) => {
    //e.preventDefault();
    try {
      let resolvedReimbursement = await patchReimbursement(
        this.state.reimbursementId,
        2
      );
      this.props.updateReimbursements();
    } catch (e) {
      console.error(e.message);
    }
  };
  declineReimbursement = async (e) => {
    // e.preventDefault();
    try {
      let resolvedReimbursement = await patchReimbursement(
        this.state.reimbursementId,
        3
      );
      this.props.updateReimbursements();
    } catch (e) {
      console.error(e.message);
    }
  };

  render() {
    console.log("this is props user in header:", this.props.user());
    if (
      (this.props.user() && this.props.user().role === "reg-user") ||
      (this.props.user() && this.props.user().role === 3)
    ) {
      return (
        <React.Fragment>
          <nav className="navBar">
            <h1 className="navTitle">Expense Reimbursement System</h1>
            <span className="navigation">
              <Link className="modify" to="/about">
                Change info
              </Link>
              <button className="logout" onClick={this.logout}>
                Logout
              </button>
              <Link className="modify" to="/reimbursements">
                New reimbursement
              </Link>
            </span>
          </nav>
        </React.Fragment>
      );
    } else if (
      (this.props.user() && this.props.user().role === "finance-manager") ||
      (this.props.user() && this.props.user().role === 2)
    ) {
      return (
        <>
          <React.Fragment>
            <nav className="navBar">
              <h1 className="navTitle">Expense Reimbursement System</h1>
              <span className="navigation">
                <Link className="modify" to="/home">
                  Home
                </Link>
                <button className="managerLogout" onClick={this.logout}>
                  Logout
                </button>
                <span>
                  <input
                    className="inputId"
                    onChange={this.handleIdChange}
                    name="reimbursementId"
                    placeholder="Reimbursement Id"
                    type="number"
                  ></input>
                  <button
                    className="inputButton"
                    id="approve"
                    onClick={this.approveReimbursement}
                  >
                    Approve
                  </button>
                  <button
                    className="inputButton"
                    id="deny"
                    onClick={this.declineReimbursement}
                  >
                    Deny
                  </button>
                </span>
              </span>
            </nav>
          </React.Fragment>
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/"></Redirect>
          <React.Fragment>
            <nav className="navBar">
              <h1 className="navTitle">Expense Reimbursement System</h1>
            </nav>
          </React.Fragment>
        </>
      );
    }
  }
}

export default Header;
