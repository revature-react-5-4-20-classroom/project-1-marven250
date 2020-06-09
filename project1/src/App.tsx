import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Reimbursements from "./Components/Reimbursements";
import Home from "./Components/Home";
import history from "./history";
import SingleReimbursement from "./Components/singleReimbursement";
import { getCurrentUserReimbursements, getAllUsers } from "./api/infoClient";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: null,
      toDashboard: false,
      cUserReimbursements: [],
      allUsers: [],
      allReimbursements: [],
    };
  }

  updateUser = async (user: any) => {
    console.log("this is our updated user:", user);
    await sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      loggedInUser: user,
    });
    if (this.myUser().role === "finance-manager") {
      const allUsers = await getAllUsers();
      this.setState({ allUsers: allUsers });
      //console.log("This is all users fo manager: ", allUsers);
    }

    history.push("/home");
    // history.push("/home");
  };

  updateReimbursements = async () => {
    try {
      const newCurrentReimbursements = await getCurrentUserReimbursements();
      console.log("these are new reimbursementssss", newCurrentReimbursements);
      this.setState({
        cUserReimbursements: newCurrentReimbursements,
      });
      history.push("/home");
    } catch (e) {
      console.error(e.message);
    }
  };

  updatePage = () => {
    // console.log("//////////", this.props.history);
    console.log("attempting to logout");
    sessionStorage.clear();
    this.setState({ loggedInUser: null, toDashboard: true });
  };

  myUser = () => {
    let user = this.state.loggedInUser;
    return user;
  };

  render() {
    //console.log("these are reimbursements:", this.state.cUserReimbursements);
    return (
      <>
        <Redirect from="*" to="/home" />
        <Header
          updateReimbursements={this.updateReimbursements}
          updatePage={this.updatePage}
          user={this.myUser}
        />
        <Switch>
          <Route
            path="/singleReimbursements"
            render={(props) => <SingleReimbursement {...props} />}
          />
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                currentReimbursements={this.state.cUserReimbursements}
                user={this.myUser}
                allUsers={this.state.allUsers}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                updateUser={this.updateUser}
                user={this.myUser}
              />
            )}
          />
          <Route
            path="/reimbursements"
            render={(props) => (
              <Reimbursements
                {...props}
                updateReimbursements={this.updateReimbursements}
                user={this.myUser}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                user={this.myUser}
                updateUser={this.updateUser}
                updateReimbursements={this.updateReimbursements}
              />
            )}
          />
        </Switch>
      </>
    );

    // return (
    //   <>
    //     <Route
    //       render={(props) => (
    //         <Login {...props} user={this.myUser} updateUser={this.updateUser} />
    //       )}
    //     />
    //   </>
    // );
  }
}

export default App;
