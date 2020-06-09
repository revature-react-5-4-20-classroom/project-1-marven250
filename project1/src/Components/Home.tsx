import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import ReimbursementsList from "./ReimbursementsList";
import ManagerReimbursements from "./ManagerReimbursements";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.user(),
      allUsers: this.props.allUsers,
      singleReimbursement: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.user(),
    });
  }

  render() {
    let user = this.props.user();
    console.log("this is is user in home", user);
    if ((user && user.role === "reg-user") || (user && user.role === 3)) {
      return (
        <>
          <h1 className="title">Welcome {this.state.currentUser.firstname}!</h1>
          <div className="homeLayout">
            <Profile currentUser={this.state.currentUser}></Profile>
            {this.props.currentReimbursements ? (
              <ReimbursementsList
                userReimbursements={this.props.currentReimbursements}
              ></ReimbursementsList>
            ) : (
              <div>This user has no reimbursements</div>
            )}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      );
    } else if (
      (user && user.role === "finance-manager") ||
      (user && user.role === 2)
    ) {
      return (
        <>
          <h1 className="title">
            Welcome Manager {this.state.currentUser.firstname}!
          </h1>
          <div className="homeLayout">
            {/* <div>This is our manager HomePage</div> */}
            <span>
              <Profile
                currentUser={this.state.currentUser}
                allUsers={this.state.allUsers}
              ></Profile>
            </span>
            <span>
              <ManagerReimbursements></ManagerReimbursements>
            </span>
          </div>
          <br></br>
          <br></br>
        </>
      );
    } else {
      return (
        <>
          <div>Please login to view homePage</div> <Link to="/">Login</Link>
        </>
      );
    }
  }
}

export default Home;
