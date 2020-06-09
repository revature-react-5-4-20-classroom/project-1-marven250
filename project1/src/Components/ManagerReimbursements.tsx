import React, { Component } from "react";
import {
  getPendingReimbursements,
  getDeclinedReimbursements,
  getApprovedReimbursements,
} from "../api/infoClient";

export class ManagerReimbursements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      pending: true,
      denied: false,
      approved: false,
      pendingReimbursements: [],
      approvedReimbursements: [],
      deniedReimbursements: [],
      resolvedReimbursements: [],
    };
  }

  async componentDidMount() {
    this.setState({
      pendingReimbursements: await getPendingReimbursements(),
      approvedReimbursements: await getApprovedReimbursements(),
      deniedReimbursements: await getDeclinedReimbursements(),
    });
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
    console.log("this is prized state", this.state);

    if (this.state.approved) {
      this.ReimbursementModule = this.state.approvedReimbursements.map(
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
                        <th width="30%">Author</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.author}</td>
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
      this.ReimbursementModule = this.state.pendingReimbursements.map(
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
                        <th width="30%">Author</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.author}</td>
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
      this.ReimbursementModule = this.state.deniedReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Denied") {
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
                        <th width="30%">Author</th>
                        <td width="2%">:</td>
                        <td>{oneReimbursement.author}</td>
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
    return (
      <>
        <h2 className="usersSign">All Reimbursements</h2>
        <div className="usersReimbursementArea">
          <button id="pending" onClick={this.onPendingStatusChange}>
            Pending
          </button>
          <button id="approve" onClick={this.onApprovedStatusChange}>
            Approved
          </button>
          <button id="deny" onClick={this.onDeclinedStatusChange}>
            Denied
          </button>
          {this.ReimbursementModule}
        </div>
      </>
    );
  }
}

export default ManagerReimbursements;
