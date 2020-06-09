import React, { Component } from "react";
import {
  login,
  getPendingReimbursements,
  getApprovedReimbursements,
  getDeclinedReimbursements,
  getCurrentUserReimbursements,
} from "../api/infoClient";
import { Link, Redirect } from "react-router-dom";
import history from "../history";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handlePassChange = (e) => {
    this.setState({
      passWord: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await login(
        this.state.userName,
        this.state.passWord
      );

      //console.log("propsssssssssssssssssss", this.props);
      this.props.updateUser(loggedInUser);
      this.props.updateReimbursements();
      // getPendingReimbursements();
      // getApprovedReimbursements();
      // getDeclinedReimbursements();
      // getCurrentUserReimbursements();
      //console.log(history);
      // this.setState({
      //   username: "",
      //   password: "",
      // });
    } catch (e) {
      console.error("!!!!!!!!", e.message);
    }
  };

  // componentWillUnmount() {
  //   history.push("/home");
  // }

  render() {
    //this.props.user() ? <Redirect to="/home" /> : console.log("reRender");

    return (
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              onChange={this.handleNameChange}
              type="text"
              name=""
              required
            />
            <label>Username</label>
          </div>
          <div className="inputbox">
            <input
              onChange={this.handlePassChange}
              type="password"
              name=""
              required
            />
            <label>Password</label>
          </div>
          <input id="submitButton" type="submit" name="" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
