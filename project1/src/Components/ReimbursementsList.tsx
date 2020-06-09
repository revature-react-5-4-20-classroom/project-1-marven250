import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ReimbursementsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      pending: false,
      denied: false,
      approved: false,
    };
  }

  onPendingStatusChange = () => {
    this.setState({
      pending: true,
      all: false,
      denied: false,
      approved: false,
    });
    console.log("pendning status");
  };

  onApprovedStatusChange = () => {
    this.setState({
      pending: false,
      all: false,
      denied: false,
      approved: true,
    });
    console.log("apporve status");
  };
  onDeclinedStatusChange = () => {
    this.setState({
      pending: false,
      all: false,
      denied: true,
      approved: false,
    });
    console.log("adeclined status");
  };

  onAllStatusChange = () => {
    this.setState({
      pending: false,
      all: true,
      denied: false,
      approved: false,
    });
    console.log("all status");
  };
  ReimbursementModule;

  componentDidUpdate() {
    if (this.state.all) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          return (
            <div className="aReimbursement">
              <div class="card shadow-sm">
                <div class="card-body pt-0">
                  <table class="table table-bordered">
                    <tr>
                      <th width="30%">Id</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.id}</td>
                    </tr>
                    <tr>
                      <th width="30%">Amount</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.amount}</td>
                    </tr>
                    <tr>
                      <th width="30%">Description </th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.description}</td>
                    </tr>
                    <tr>
                      <th width="30%">Date Submitted</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.datesubmitted}</td>
                    </tr>
                    <tr>
                      <th width="30%">Date Resolved</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.dateresolved}</td>
                    </tr>
                    <tr>
                      <th width="30%">Type</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.rtype}</td>
                    </tr>
                    <tr>
                      <th width="30%">Status</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.status}</td>
                    </tr>
                    <tr>
                      <th width="30%">Resolver</th>
                      <td width="2%">:</td>
                      <td>{oneReimbursement.resolver}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <br></br>
            </div>
          );
        }
      );
    }

    if (this.state.approved) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Approved") {
            return (
              <div className="aReimbursement">
                <div class="card shadow-sm">
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Id</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.id}</td>
                      </tr>
                      <tr>
                        <th width="30%">Amount</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.amount}</td>
                      </tr>
                      <tr>
                        <th width="30%">Description </th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.description}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Submitted</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.datesubmitted}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Resolved</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.dateresolved}</td>
                      </tr>
                      <tr>
                        <th width="30%">Type</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.rtype}</td>
                      </tr>
                      <tr>
                        <th width="30%">Status</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.status}</td>
                      </tr>
                      <tr>
                        <th width="30%">Resolver</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.resolver}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br></br>
              </div>
            );
          }
        }
      );
    }

    if (this.state.pending) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Pending") {
            return (
              <div className="aReimbursement">
                <div class="card shadow-sm">
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Id</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.id}</td>
                      </tr>
                      <tr>
                        <th width="30%">Amount</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.amount}</td>
                      </tr>
                      <tr>
                        <th width="30%">Description </th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.description}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Submitted</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.datesubmitted}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Resolved</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.dateresolved}</td>
                      </tr>
                      <tr>
                        <th width="30%">Type</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.rtype}</td>
                      </tr>
                      <tr>
                        <th width="30%">Status</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.status}</td>
                      </tr>
                      <tr>
                        <th width="30%">Resolver</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.resolver}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br></br>
              </div>
            );
          }
        }
      );
    }

    if (this.state.denied) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Denied") {
            return (
              // <ul key={oneReimbursement.id}>
              //   <label>
              //     Amount:
              //     <li>{oneReimbursement.amount}</li>
              //   </label>
              //   <label>
              //     DateSubmitted:
              //     <li>{oneReimbursement.datesubmitted}</li>
              //   </label>
              //   <label>
              //     dateResolved:
              //     <li>{oneReimbursement.dateresolved}</li>
              //   </label>
              //   <label>
              //     Description:
              //     <li>{oneReimbursement.description}</li>
              //   </label>
              //   <label>
              //     Resolver:
              //     <li>{oneReimbursement.resolver}</li>
              //   </label>
              //   <label>
              //     Type:
              //     <li>{oneReimbursement.rtype}</li>
              //   </label>
              //   <label>
              //     Status:
              //     <li>{oneReimbursement.status}</li>
              //   </label>
              // </ul>
              <div className="aReimbursement">
                <div class="card shadow-sm">
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Id</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.id}</td>
                      </tr>
                      <tr>
                        <th width="30%">Amount</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.amount}</td>
                      </tr>
                      <tr>
                        <th width="30%">Description </th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.description}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Submitted</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.datesubmitted}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Resolved</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.dateresolved}</td>
                      </tr>
                      <tr>
                        <th width="30%">Type</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.rtype}</td>
                      </tr>
                      <tr>
                        <th width="30%">Status</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.status}</td>
                      </tr>
                      <tr>
                        <th width="30%">Resolver</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.resolver}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br></br>
              </div>
            );
          }
        }
      );
    }
  }

  render() {
    //console.log("reimburses in list:", this.props.userReimbursements);
    return (
      <div className="reimbursementArea">
        <h2 className="reimbursementInfoTitle">Reimbursements Info</h2>
        <div className="reimbursementButtons">
          <button className="pending" onClick={this.onPendingStatusChange}>
            Pending
          </button>
          <button className="approve" onClick={this.onApprovedStatusChange}>
            Approved
          </button>
          <button className="deny" onClick={this.onDeclinedStatusChange}>
            Declined
          </button>
          <button className="all" onClick={this.onAllStatusChange}>
            All
          </button>
        </div>
        {this.ReimbursementModule}
      </div>
    );
  }
}

export default ReimbursementsList;
