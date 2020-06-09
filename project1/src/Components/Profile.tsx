import React, { Component } from "react";
import { getAUserReimbursement } from "../api/infoClient";
import { Link } from "react-router-dom";
import history from "../history";

export class Profile extends Component {
  // displayReimbursements = () => {
  //   while (this.state.reimbursements.length < 0) {
  //     return <div>Reimbursements loading......</div>;
  //   }

  //   if (this.state.reimbursements.length > 0) {
  //     this.state.reimbursements.map((reimburse) => {
  //       return <div>{reimburse.amount}</div>;
  //     });
  //   }
  // };

  constructor(props) {
    super(props);
    this.state = {
      singleReimbursement: [],
      singlePersonId: 0,
    };
  }

  getSingleReimbursement = async () => {
    if (
      this.state.singlePersonId == 1 ||
      this.state.singlePersonId == 2 ||
      this.state.singlePersonId == 3 ||
      this.state.singlePersonId == 4 ||
      this.state.singlePersonId == 5
    ) {
      try {
        const responseReimbursement = await getAUserReimbursement(
          this.state.singlePersonId
        );
        //console.log("This our response reimbursmnet", responseReimbursement);
        sessionStorage.setItem(
          "aReimbursement",
          JSON.stringify(responseReimbursement)
        );
        history.push("/singleReimbursements");
      } catch (e) {
        console.error(e.message);
      }
    } else {
      console.log("There's no user by that id");
    }
  };

  handleFormChange = (e) => {
    this.setState({
      singlePersonId: e.target.value,
    });
  };

  render() {
    let user = this.props.currentUser;
    let allUsers = this.props.allUsers;

    if (user.role === "finance-manager") {
      return (
        <>
          <h2 className="usersSign">All Users</h2>
          <input
            className="inputButton"
            placeholder="User Id"
            onChange={this.handleFormChange}
          />
          <button className="all" onClick={this.getSingleReimbursement}>
            Get Reimbursements
          </button>

          <br></br>
          {allUsers.map((aUser) => {
            return (
              <>
                <div className="usersProfileArea">
                  <h2 className="personalInfoTitle">{aUser.username}'s Info</h2>
                  {/* <Link to="/about">Change info</Link> */}
                  <div className="aReimbursement">
                    <div class="card shadow-sm">
                      <div class="card-body pt-0">
                        <table class="table table-bordered">
                          <tr>
                            <th width="30%">Id</th>
                            <td width="2%">:</td>
                            <td>{aUser.id}</td>
                          </tr>
                          <tr>
                            <th width="30%">First Name</th>
                            <td width="2%">:</td>
                            <td>{aUser.firstname}</td>
                          </tr>
                          <tr>
                            <th width="30%">Last Name </th>
                            <td width="2%">:</td>
                            <td>{aUser.lastname}</td>
                          </tr>
                          <tr>
                            <th width="30%">Username</th>
                            <td width="2%">:</td>
                            <td>{aUser.username}</td>
                          </tr>
                          <tr>
                            <th width="30%">Password</th>
                            <td width="2%">:</td>
                            <td>{aUser.password}</td>
                          </tr>
                          <tr>
                            <th width="30%">Email</th>
                            <td width="2%">:</td>
                            <td>{aUser.email}</td>
                          </tr>
                          <tr>
                            <th width="30%">Role</th>
                            <td width="2%">:</td>
                            <td>{aUser.role}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <br></br>
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          <div className="profileArea">
            <h2 className="personalInfoTitle">Personal Info</h2>
            {/* <Link to="/about">Change info</Link> */}
            <div className="aReimbursement">
              <div class="card shadow-sm">
                <div class="card-body pt-0">
                  <table class="table table-bordered">
                    <tr>
                      <th width="30%">Id</th>
                      <td width="2%">:</td>
                      <td>{user.id}</td>
                    </tr>
                    <tr>
                      <th width="30%">First Name</th>
                      <td width="2%">:</td>
                      <td>{user.firstname}</td>
                    </tr>
                    <tr>
                      <th width="30%">Last Name </th>
                      <td width="2%">:</td>
                      <td>{user.lastname}</td>
                    </tr>
                    <tr>
                      <th width="30%">Username</th>
                      <td width="2%">:</td>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th width="30%">Password</th>
                      <td width="2%">:</td>
                      <td>{user.password}</td>
                    </tr>
                    <tr>
                      <th width="30%">Email</th>
                      <td width="2%">:</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th width="30%">Role</th>
                      <td width="2%">:</td>
                      <td>{user.role}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <br></br>
            </div>
            {/* <ul>
              <label>
                {" "}
                Firstname:
                <li>{user.firstname}</li>
              </label>
              <label>
                {" "}
                Lastname:
                <li>{user.lastname}</li>
              </label>
              <label>
                {" "}
                Email:
                <li>{user.email}</li>
              </label>
              <label>
                {" "}
                Password:
                <li>{user.password}</li>
              </label>
              <label>
                {" "}
                Role:
                <li>{user.role}</li>
              </label>
            </ul> */}
          </div>
        </>
      );
    }
  }
}

export default Profile;
