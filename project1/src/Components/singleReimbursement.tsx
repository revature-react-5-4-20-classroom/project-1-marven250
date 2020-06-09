import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SingleReimbursement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aReimbursement: [],
    };
  }

  componentDidMount() {
    // console.log(
    //   "this is upstae session reimbursess",
    //   JSON.parse(sessionStorage.getItem("aReimbursement"))
    // );
    this.setState({
      aReimbursement: JSON.parse(sessionStorage.getItem("aReimbursement")),
    });
  }

  render() {
    console.log("this sReimburse state", this.state.aReimbursement);
    return (
      <>
        <span className="singleReimburseTitle">
          <h2 className="singleTitle">
            {this.state.aReimbursement[0] &&
              this.state.aReimbursement[0].author}
            's Reimbursements
          </h2>
        </span>
        {this.state.aReimbursement.map((aReimbursement) => {
          return (
            <>
              <div className="aReimbursementStyle">
                <div class="card shadow-sm">
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Id</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.id}</td>
                      </tr>
                      <tr>
                        <th width="30%">Author</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.author}</td>
                      </tr>
                      <tr>
                        <th width="30%">Amount</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.amount}</td>
                      </tr>
                      <tr>
                        <th width="30%">Description </th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.description}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Submitted</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.datesubmitted}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date Resolved</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.dateresolved}</td>
                      </tr>
                      <tr>
                        <th width="30%">Type</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.rtype}</td>
                      </tr>
                      <tr>
                        <th width="30%">Status</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.status}</td>
                      </tr>
                      <tr>
                        <th width="30%">Resolver</th>
                        <td width="2%">:</td>
                        <td>{aReimbursement.resolver}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br></br>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default SingleReimbursement;
