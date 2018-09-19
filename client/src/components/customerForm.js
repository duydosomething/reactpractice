import React, { Component } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Field, reduxForm } from "redux-form";
import customerField from "./customerField";
import { postUsers } from "../actions";
import { connect } from "react-redux";




class CustomerForm extends Component {

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value
   });
   console.log(this.state);
 };


// render(){
//   const { classes } = this.props;
//   return (
//       <form className={classes.container} noValidate autoComplete="off">
//         <TextField
//           required
//           id="required"
//           label="First Name"
//           margin="normal"
//           className={classes.textField}
//           onChange={this.handleChange("firstName")}
//         />
//         <TextField
//           required
//           id="required"
//           label="Last Name"
//           margin="normal"
//           className={classes.textField}
//           onChange={this.handleChange("lastName")}
//         />
//         <Button mini variant="fab" color="primary" aria-label="Add" className={classes.button}>
//           <AddIcon />
//         </Button>
//       </form>
//     );
//   }
// }
  onSubmit(values){
    this.props.postUsers(values);
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} noValidate autoComplete="off">
        <Field
        key="firstName"
        component={customerField}
        type="text"
        label="First Name"
        name="firstName"/>
        
        <Field
        key="lastName"
        component={customerField}
        type="text"
        label="Last Name"
        name="lastName"/>
        <Button mini variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </form>


    )
  }
}

// CustomerForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default reduxForm({
  form: "customerForm"
})(
  connect(null, { postUsers })(CustomerForm)
);
