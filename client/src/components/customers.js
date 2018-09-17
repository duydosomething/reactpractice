import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../actions"
import './customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.props.users.map(customer =>
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return { users };
}
export default connect(mapStateToProps, { fetchUsers })(Customers);
